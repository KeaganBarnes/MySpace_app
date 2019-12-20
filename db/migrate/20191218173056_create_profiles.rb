class CreateProfiles < ActiveRecord::Migration[6.0]
  def change
    create_table :profiles do |t|
      t.string :name
      t.string :username
      t.text :bio
      t.string :avatar

      t.timestamps
    end
  end
end
