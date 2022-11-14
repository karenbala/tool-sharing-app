class CreateTools < ActiveRecord::Migration[5.2]
  def change
    create_table :tools do |t|
      t.string :power_type, null: false
      t.string :name, null:false
      t.string :product
      t.string :brand
      t.string :size
      t.string :weight
      t.text :description, null: false

      t.belongs_to :user

      t.timestamps null:false
    end
  end
end
