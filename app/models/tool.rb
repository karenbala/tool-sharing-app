class Tool < ApplicationRecord
  validates :power_type, presence: true
  validates :name, presence: true
  validates :description, presence: true

  belongs_to :user
  

end