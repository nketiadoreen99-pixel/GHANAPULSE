"use client";

import { useState } from "react";
import { Heart, Flag, ChevronDown, ChevronUp, Send } from "lucide-react";
import { Comment } from "@/types";
import { formatDate } from "@/lib/utils";

interface CommentSectionProps {
  comments: Comment[];
  articleId: string;
}

export default function CommentSection({ comments, articleId }: CommentSectionProps) {
  const [showAll, setShowAll] = useState(false);
  const [newComment, setNewComment] = useState("");
  const [localComments, setLocalComments] = useState(comments);

  const displayed = showAll ? localComments : localComments.slice(0, 3);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!newComment.trim()) return;
    const comment: Comment = {
      id: `local-${Date.now()}`,
      articleId,
      userId: "guest",
      userName: "Guest User",
      userAvatar: "",
      content: newComment.trim(),
      createdAt: new Date().toISOString(),
      likes: 0,
    };
    setLocalComments([comment, ...localComments]);
    setNewComment("");
  }

  return (
    <section className="mt-8">
      <h2 className="text-lg font-bold text-text-primary dark:text-dark-text-primary mb-4">
        Comments ({localComments.length})
      </h2>

      {/* Comment form */}
      <form onSubmit={handleSubmit} className="mb-6">
        <div className="flex gap-3">
          <div className="w-9 h-9 rounded-full bg-primary-100 dark:bg-dark-surface-tertiary flex items-center justify-center shrink-0">
            <span className="text-xs font-bold text-primary dark:text-primary-light">G</span>
          </div>
          <div className="flex-1">
            <textarea
              value={newComment}
              onChange={(e) => setNewComment(e.target.value)}
              placeholder="Share your thoughts..."
              rows={3}
              className="w-full px-3 py-2 text-sm rounded-lg border border-border-light dark:border-dark-border bg-surface-secondary dark:bg-dark-surface-tertiary text-text-primary dark:text-dark-text-primary focus:outline-none focus:ring-2 focus:ring-primary-light resize-none"
            />
            <div className="flex justify-end mt-2">
              <button
                type="submit"
                disabled={!newComment.trim()}
                className="flex items-center gap-1.5 px-4 py-2 text-sm font-medium text-text-inverse gradient-primary rounded-lg hover:opacity-90 transition-opacity disabled:opacity-50"
              >
                <Send size={14} />
                Post Comment
              </button>
            </div>
          </div>
        </div>
      </form>

      {/* Comments list */}
      <div className="space-y-4">
        {displayed.map((comment) => (
          <div key={comment.id} className="flex gap-3 p-3 rounded-lg bg-surface-secondary dark:bg-dark-surface-tertiary">
            <div className="w-9 h-9 rounded-full bg-primary-200 dark:bg-dark-border flex items-center justify-center shrink-0">
              <span className="text-xs font-bold text-primary dark:text-primary-light">
                {comment.userName.charAt(0)}
              </span>
            </div>
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-1">
                <span className="text-sm font-semibold text-text-primary dark:text-dark-text-primary">
                  {comment.userName}
                </span>
                <span className="text-xs text-text-tertiary dark:text-dark-text-tertiary">
                  {formatDate(comment.createdAt)}
                </span>
              </div>
              <p className="text-sm text-text-secondary dark:text-dark-text-secondary leading-relaxed">
                {comment.content}
              </p>
              <div className="flex items-center gap-3 mt-2">
                <button className="flex items-center gap-1 text-xs text-text-tertiary hover:text-accent-red transition-colors">
                  <Heart size={14} />
                  {comment.likes}
                </button>
                <button className="flex items-center gap-1 text-xs text-text-tertiary hover:text-text-secondary transition-colors">
                  <Flag size={14} />
                  Report
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {localComments.length > 3 && (
        <button
          onClick={() => setShowAll(!showAll)}
          className="flex items-center gap-1 mx-auto mt-4 px-4 py-2 text-sm font-medium text-primary hover:text-primary-dark transition-colors"
        >
          {showAll ? (
            <>Show Less <ChevronUp size={16} /></>
          ) : (
            <>View All Comments ({localComments.length}) <ChevronDown size={16} /></>
          )}
        </button>
      )}
    </section>
  );
}
