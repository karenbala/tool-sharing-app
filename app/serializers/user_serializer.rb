class UserSerializer < ActiveModel::Serializer
  attributes :id, :first_name, :last_name, :address, :city, :state, :zip, :description, :email

  has_many :issued_requests
  # has_many :received_requests
  has_many :tools
  # has_many :borrowed_tools

end