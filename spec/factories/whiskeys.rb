FactoryBot.define do
  sequence(:name) { |n| "Whiskey ##{n}" }

  factory :whiskey do
    name
    description { 'I loved this whiskey' }
    taste { (1..5).to_a.sample }
    color { (1..5).to_a.sample }
    smokiness { (1..5).to_a.sample }
  end
end
