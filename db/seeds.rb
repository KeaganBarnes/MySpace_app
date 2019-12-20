200.times do
  User.create(
    name: Faker::Name.name, 
    username: Faker::Hacker.noun,
    bio: Faker::TvShows::MichaelScott.quote,
    avatar: Faker::Avatar.image #=> "https://robohash.org/sitsequiquia.png?size=300x300&set=set1"
  )
end

puts "YEAAAAHHHHH BOOOIIIIIIII"