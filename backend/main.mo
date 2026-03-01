import Map "mo:core/Map";
import Principal "mo:core/Principal";
import Runtime "mo:core/Runtime";
import Time "mo:core/Time";
import Text "mo:core/Text";
import MixinAuthorization "authorization/MixinAuthorization";
import AccessControl "authorization/access-control";

actor {
  // Initialize the user system state
  let accessControlState = AccessControl.initState();
  include MixinAuthorization(accessControlState);

  type UserProfile = {
    displayName : Text;
    principal : Text;
    joinDate : Time.Time;
  };

  let userProfiles = Map.empty<Principal, UserProfile>();

  // Required by frontend: get the calling user's profile
  public query ({ caller }) func getCallerUserProfile() : async ?UserProfile {
    if (not (AccessControl.hasPermission(accessControlState, caller, #user))) {
      Runtime.trap("Unauthorized: Must be logged in to view profile");
    };
    userProfiles.get(caller);
  };

  // Required by frontend: save/update the calling user's profile
  public shared ({ caller }) func saveCallerUserProfile(profile : UserProfile) : async () {
    if (not (AccessControl.hasPermission(accessControlState, caller, #user))) {
      Runtime.trap("Unauthorized: Must be logged in to save a profile");
    };

    let displayNameLength = profile.displayName.toArray().size();
    if (displayNameLength < 3 or displayNameLength > 15) {
      Runtime.trap("Display name must be between 3 and 15 characters");
    };

    userProfiles.add(caller, profile);
  };

  // Required by frontend: fetch another user's profile (own profile or admin can view any)
  public query ({ caller }) func getUserProfile(user : Principal) : async ?UserProfile {
    if (caller != user and not AccessControl.isAdmin(accessControlState, caller)) {
      Runtime.trap("Unauthorized: Can only view your own profile");
    };
    userProfiles.get(user);
  };

  // Register a member profile tied to the caller's Principal
  public shared ({ caller }) func registerMemberProfile(displayName : Text) : async () {
    if (not (AccessControl.hasPermission(accessControlState, caller, #user))) {
      Runtime.trap("Unauthorized: Must be logged in to register a profile");
    };

    let displayNameLength = displayName.toArray().size();
    if (displayNameLength < 3 or displayNameLength > 15) {
      Runtime.trap("Display name must be between 3 and 15 characters");
    };

    let newProfile : UserProfile = {
      displayName;
      principal = caller.toText();
      joinDate = Time.now();
    };

    userProfiles.add(caller, newProfile);
  };

  // Check whether the caller is a registered member
  public query ({ caller }) func isMember() : async Bool {
    if (not (AccessControl.hasPermission(accessControlState, caller, #user))) {
      return false;
    };
    userProfiles.containsKey(caller);
  };
};
