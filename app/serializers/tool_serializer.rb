class ToolSerializer < ActiveModel::Serializer
  attributes :id, :power_type, :name, :image_url, :product, :brand, :size, :weight, :description, :available, :user_id, :borrower_id

  # has_many :requests
  # has_many :users, through: :requests
  belongs_to :user
  belongs_to :borrower, class_name:"User"
end