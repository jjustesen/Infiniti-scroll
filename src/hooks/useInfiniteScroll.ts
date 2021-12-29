import { useEffect } from "react";
import {
  useTrackVisibility,
  IntersectionObserverHookArgs,
  IntersectionObserverHookRefCallback,
  IntersectionObserverHookRootRefCallback,
} from "react-intersection-observer-hook";

const DEFAULT_DELAY_IN_MS = 100;

export type UseInfiniteScrollHookResult = [
  IntersectionObserverHookRefCallback,
  { rootRef: IntersectionObserverHookRootRefCallback }
];

export type UseInfiniteScrollHookArgs = Pick<
  IntersectionObserverHookArgs,
  "rootMargin"
> & {
  loading: boolean;
  hasNextPage: boolean;
  onLoadMore: VoidFunction;
  disabled?: boolean;
  delayInMs?: number;
};

const useInfiniteScroll = ({
  loading,
  hasNextPage,
  onLoadMore,
  rootMargin,
  disabled,
  delayInMs = DEFAULT_DELAY_IN_MS,
}: UseInfiniteScrollHookArgs): UseInfiniteScrollHookResult => {
  const [ref, { rootRef, isVisible }] = useTrackVisibility({
    rootMargin,
  });

  const shouldLoadMore = !disabled && !loading && isVisible && hasNextPage;

  // eslint-disable-next-line consistent-return
  useEffect(() => {
    if (shouldLoadMore) {
      const timer = setTimeout(() => {
        onLoadMore();
      }, delayInMs);
      return () => {
        clearTimeout(timer);
      };
    }
  }, [onLoadMore, shouldLoadMore, delayInMs]);

  return [ref, { rootRef }];
};

export default useInfiniteScroll;
