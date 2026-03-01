import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { useActor } from './useActor';
import type { UserProfile } from '../backend';

export function useMyProfile() {
  const { actor, isFetching: actorFetching } = useActor();

  const query = useQuery<UserProfile | null>({
    queryKey: ['myProfile'],
    queryFn: async () => {
      if (!actor) throw new Error('Actor not available');
      return actor.getCallerUserProfile();
    },
    enabled: !!actor && !actorFetching,
    retry: false,
  });

  return {
    ...query,
    isLoading: actorFetching || query.isLoading,
    isFetched: !!actor && query.isFetched,
  };
}

export function useIsMember() {
  const { actor, isFetching: actorFetching } = useActor();

  return useQuery<boolean>({
    queryKey: ['isMember'],
    queryFn: async () => {
      if (!actor) return false;
      return actor.isMember();
    },
    enabled: !!actor && !actorFetching,
    retry: false,
  });
}

export function useRegisterMember() {
  const { actor } = useActor();
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (displayName: string) => {
      if (!actor) throw new Error('Actor not available');
      return actor.registerMemberProfile(displayName);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['myProfile'] });
      queryClient.invalidateQueries({ queryKey: ['isMember'] });
    },
  });
}
