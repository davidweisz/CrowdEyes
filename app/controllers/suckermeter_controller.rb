class SuckermeterController < ApplicationController
  def index
    if params[:score]
      @sucker_score = params[:score]
    else
      @sucker_score = 79
    end
  end
end
