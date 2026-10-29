"use client";

import { forwardRef } from "react";

import type { Category } from "@/lib/categories";
import { DraggableRepoCard } from "@/components/draggable-repo-card";
import { Button } from "@/components/ui/button";

interface DroppableCategoryProps {
  category: Category;
  visibleCount: number;
  onLoadMore: () => void;
}

/**
 * Expanded section showing repos in a category.
 *
 * Renders a grid of `DraggableRepoCard` components. Despite the name,
 * this component itself is NOT a drop target - users drop repos onto
 * the `DroppableCategoryTile` tiles in the `CategoryGrid` above.
 */
export const DroppableCategory = forwardRef<HTMLDivElement, DroppableCategoryProps>(
  function DroppableCategory({ category, visibleCount, onLoadMore }, ref) {
    if (category.repos.length === 0) {
      return (
        <div
          ref={ref}
          className="border-muted-foreground/20 rounded-lg border-2 border-dashed py-12 text-center"
        >
          <p className="text-muted-foreground">
            No repositories in <span className="font-medium">{category.name}</span>
          </p>
          <p className="text-muted-foreground mt-1 text-sm">
            Drag repos here using the category tiles above
          </p>
        </div>
      );
    }

    const visibleRepos = category.repos.slice(0, visibleCount);
    const remainingCount = category.repos.length - visibleRepos.length;

    return (
      <div ref={ref}>
        <div className="mb-4 flex items-baseline justify-between">
          <div>
            <h2 className="text-lg font-semibold">{category.name}</h2>
            {category.name === "Uncategorized" ? (
              <p className="text-muted-foreground text-sm">
                Drag these to category tiles above to organize
              </p>
            ) : (
              <p className="text-muted-foreground text-sm">
                Drag repos to other category tiles to reorganize
              </p>
            )}
          </div>
          <span className="text-muted-foreground text-sm">
            {category.repos.length} {category.repos.length === 1 ? "repository" : "repositories"}
          </span>
        </div>
        <div className="grid auto-rows-fr gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {visibleRepos.map((repo) => (
            <DraggableRepoCard key={repo.id} repo={repo} />
          ))}
        </div>
        {remainingCount > 0 && (
          <div className="mt-6 flex flex-col items-center gap-2">
            <p className="text-muted-foreground text-sm">
              Showing {visibleRepos.length} of {category.repos.length} repositories
            </p>
            <Button type="button" variant="outline" onClick={onLoadMore}>
              Show more ({remainingCount} remaining)
            </Button>
          </div>
        )}
      </div>
    );
  }
);
