class Request < ApplicationRecord
  
  belongs_to :tool
  belongs_to :owner, class_name: "User"
  belongs_to :borrower, class_name: "User"
end