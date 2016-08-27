class Api::V1::CommentsController < ApplicationController
  def index
    tweet = Tweet.find(params[:tweet_id])
    @comments = tweet.comments
  end

  def create
    @comment = Comment.create(comment_params)
    render :show, status: :created
  end

  private
    def comment_params
      params.permit(:text, :tweet_id)
    end
end
