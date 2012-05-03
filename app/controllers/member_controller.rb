class MemberController < ApplicationController
  
  # From here onwards user needs to be signed in
  before_filter :authenticate_user!
  
  def index
    @user = current_user
  end
end
