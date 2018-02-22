class Treehouse < ApplicationRecord
  belongs_to :user
  validates :title, presence: true
  validates :location, presence: true
  validates :price_per_night, presence: true, numericality: { greater_than: 0 }
  validates :capacity, presence: true, inclusion: { in: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16] }

  geocoded_by :location
  after_validation :geocode, if: :location_changed?

  mount_uploader :photo, PhotoUploader
end
