class User < ApplicationRecord
  validates :first_name, presence: true
  validates :last_name, presence: true
  validates :address, presence: true
  validates :city, presence: true
  validates :state, presence: true
  validates :zip, presence: true
  validates :description, presence: true
  validates :username, presence: true
  validates :email, presence: true
  validates :password, presence: true

  has_many :issued_requests, class_name: "Request", foreign_key: "borrower_id"
  
  has_many :received_requests, class_name: "Request", foreign_key: "owner_id"
  # has_many :tools, through: :requests



  has_many :tools #( the tools that the user owns)
  # nick code 
  has_many :borrowed_tools, class_name: "Tool", foreign_key: "borrower_id"
  # in order for this to work, we need to make a migration that adds a borrower_id column to the tools table 

  # old code
  # has_many :borrowed_tools, class_name: "Request", foreign_key: "borrower_id"

  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable
end