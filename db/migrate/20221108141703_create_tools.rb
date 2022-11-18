class CreateTools < ActiveRecord::Migration[5.2]
  def change
    create_table :tools do |t|
      t.string :power_type, null: false
      t.string :name, null:false
      t.text :image_url, null:false
      t.string :product
      t.string :brand
      t.string :size
      t.string :weight
      t.text :description, null: false
      t.boolean :available, null:false, default: true

      t.belongs_to :user, null:false
      t.bigint :borrower_id

      t.timestamps null:false
    end
  end
end
