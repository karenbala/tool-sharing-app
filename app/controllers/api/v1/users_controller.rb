class Api::V1::UserController < ApiController
  def show
    render json: User.find(current_user.id)
  end
end