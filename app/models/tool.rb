class Tool < ApplicationRecord
  validates :power_type, presence: true
  validates :name, presence: true
  validates :image_url, presence: true
  validates :description, presence: true
  validates :available, presence: true

  has_many :requests
  has_many :users, through: :requests
  belongs_to :user # as the owner 

  belongs_to :borrower, class_name: "User", optional: true
  

end