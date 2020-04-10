FactoryBot.define do
  sequence(:name) { |n| "Whiskey ##{n}" }

  factory :whiskey do
    name
    description { 'I loved this whiskey' }
  end
end
