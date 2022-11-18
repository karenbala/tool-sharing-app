class CreateRequests < ActiveRecord::Migration[5.2]
  def change
    create_table :requests do |t|
      t.belongs_to :tool, null: false
      t.bigint :owner_id, null:false
      t.bigint :borrower_id
      
      t.timestamps null: false
    end
  end
end



