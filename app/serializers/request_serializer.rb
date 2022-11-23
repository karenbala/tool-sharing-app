class RequestSerializer < ActiveModel::Serializer
  attributes :id, :tool_id, :owner_id, :borrower_id

  belongs_to :tool
  belongs_to :owner, class_name: "User"
  belongs_to :borrower, class_name: "User"
end