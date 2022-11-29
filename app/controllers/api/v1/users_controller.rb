class Api::V1::UsersController < ApiController
  def show
    render json: current_user, serializer: UserSerializer, include: [
      'issued_requests', 
      'issued_requests.tool',
      'issued_requests.owner',
      'received_requests',
      'received_requests.tool',
      'received_requests.owner',
      'tools'
    ]
  end
end