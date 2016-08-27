class Api::V1::CommentsController < ApplicationController
  def index
    @data = [
      { nickname: "yogoken", text: "oh-my-zsh" },
      { nickname: "sakai", text: "zero is coming" }
    ]
  end
end
