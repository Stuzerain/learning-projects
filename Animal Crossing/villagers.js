let villagers = [
    //normal villagers
    {name: 'Alice', species: 'Koala', personality: 'Normal', amiibo: true},
    {name: 'Annalisa', species: 'Anteater', personality: 'Normal', amiibo: true},
    {name: 'Aurora', species: 'Penguin', personality: 'Normal', amiibo: true},
    {name: 'Ava', species: 'Chicken', personality: 'Normal', amiibo: true},
    {name: 'Bea', species: 'Dog', personality: 'Normal', amiibo: true},
    {name: 'Bertha', species: 'Hippo', personality: 'Normal', amiibo: true},
    {name: 'Bettina', species: 'Mouse', personality: 'Normal', amiibo: true},
    {name: 'Cally', species: 'Squirrel', personality: 'Normal', amiibo: true},
    {name: 'Caroline', species: 'Squirrel', personality: 'Normal', amiibo: true},
    {name: 'Carrie', species: 'Kangaroo', personality: 'Normal', amiibo: true},
    {name: 'Celia', species: 'Eagle', personality: 'Normal', amiibo: true},
    {name: 'Chevre', species: 'Goat', personality: 'Normal', amiibo: true},
    {name: 'Coco', species: 'Rabbit', personality: 'Normal', amiibo: true},
    {name: 'Daisy', species: 'Dog', personality: 'Normal', amiibo: true},
    {name: 'Deena', species: 'Duck', personality: 'Normal', amiibo: true},
    {name: 'Dora', species: 'Mouse', personality: 'Normal', amiibo: true},
    {name: 'Ellie', species: 'Elephant', personality: 'Normal', amiibo: true},
    {name: 'Eunice', species: 'Sheep', personality: 'Normal', amiibo: true},
    {name: 'Fauna', species: 'Deer', personality: 'Normal', amiibo: true},
    {name: 'Flurry', species: 'Hamster', personality: 'Normal', amiibo: true},
    {name: 'Gala', species: 'Pig', personality: 'Normal', amiibo: true},
    {name: 'Gayle', species: 'Alligator', personality: 'Normal', amiibo: true},
    {name: 'Gladys', species: 'Ostrich', personality: 'Normal', amiibo: true},
    {name: 'Goldie', species: 'Dog', personality: 'Normal', amiibo: true},
    {name: 'Jambette', species: 'Frog', personality: 'Normal', amiibo: true},
    {name: 'June', species: 'Cub', personality: 'Normal', amiibo: true},
    {name: 'Kiki', species: 'Cat', personality: 'Normal', amiibo: true},
    {name: 'Kitt', species: 'Kangaroo', personality: 'Normal', amiibo: true},
    {name: 'Lily', species: 'Frog', personality: 'Normal', amiibo: true},
    {name: 'Lolly', species: 'Cat', personality: 'Normal', amiibo: true},
    {name: 'Lucy', species: 'Pig', personality: 'Normal', amiibo: true},
    {name: 'Maggie', species: 'Pig', personality: 'Normal', amiibo: true},
    {name: 'Maple', species: 'Cub', personality: 'Normal', amiibo: true},
    {name: 'Marcie', species: 'Kangaroo', personality: 'Normal', amiibo: true},
    {name: 'Margie', species: 'Elephant', personality: 'Normal', amiibo: true},
    {name: 'Marina', species: 'Octopus', personality: 'Normal', amiibo: true},
    {name: 'Megan', species: 'Bear', personality: 'Normal', amiibo: false},
    {name: 'Melba', species: 'Koala', personality: 'Normal', amiibo: true},
    {name: 'Merengue', species: 'Rhino', personality: 'Normal', amiibo: true},
    {name: 'Midge', species: 'Bird', personality: 'Normal', amiibo: true},
    {name: 'Mitzi', species: 'Cat', personality: 'Normal', amiibo: true},
    {name: 'Molly', species: 'Duck', personality: 'Normal', amiibo: true},
    {name: 'Nan', species: 'Goat', personality: 'Normal', amiibo: true},
    {name: 'Nana', species: 'Monkey', personality: 'Normal', amiibo: true},
    {name: 'Norma', species: 'Cow', personality: 'Normal', amiibo: true},
    {name: 'Olive', species: 'Cub', personality: 'Normal', amiibo: true},
    {name: 'Peaches', species: 'Horse', personality: 'Normal', amiibo: true},
    {name: 'Pekoe', species: 'Cub', personality: 'Normal', amiibo: true},
    {name: 'Poppy', species: 'Squirrel', personality: 'Normal', amiibo: true},
    {name: 'Rhonda', species: 'Rhino', personality: 'Normal', amiibo: true},
    {name: 'Sally', species: 'Squirrel', personality: 'Normal', amiibo: true},
    {name: 'Sandy', species: 'Ostrich', personality: 'Normal', amiibo: true},
    {name: 'Savannah', species: 'Horse', personality: 'Normal', amiibo: true},
    {name: 'Skye', species: 'Wolf', personality: 'Normal', amiibo: true},
    {name: 'Stella', species: 'Sheep', personality: 'Normal', amiibo: true},
    {name: 'Sydney', species: 'Koala', personality: 'Normal', amiibo: true},
    {name: 'Sylvana', species: 'Squirrel', personality: 'Normal', amiibo: true},
    {name: 'Tia', species: 'Elephant', personality: 'Normal', amiibo: true},
    {name: 'Vesta', species: 'Sheep', personality: 'Normal', amiibo: true},

    //peppy villagers
    {name: 'Agent S', species: 'Squirrel', personality: 'Peppy', amiibo: true},
    {name: 'Annabelle', species: 'Anteater', personality: 'Peppy', amiibo: true},
    {name: 'Anicotti', species: 'Mouse', personality: 'Peppy', amiibo: true},
    {name: 'Apple', species: 'Hamster', personality: 'Peppy', amiibo: true},
    {name: 'Audie', species: 'Wolf', personality: 'Peppy', amiibo: false},
    {name: 'Bangle', species: 'Tiger', personality: 'Peppy', amiibo: true},
    {name: 'Bella', species: 'Mouse', personality: 'Peppy', amiibo: true},
    {name: 'Bianca', species: 'Tiger', personality: 'Peppy', amiibo: true},
    {name: 'Bluebear', species: 'Cub', personality: 'Peppy', amiibo: true},
    {name: 'Bonbon', species: 'Rabbit', personality: 'Peppy', amiibo: true},
    {name: 'Bubbles', species: 'Hippo', personality: 'Peppy', amiibo: true},
    {name: 'Bunnie', species: 'Rabbit', personality: 'Peppy', amiibo: true},
    {name: 'Candi', species: 'Mouse', personality: 'Peppy', amiibo: true},
    {name: 'Carmen', species: 'Rabbit', personality: 'Peppy', amiibo: true},
    {name: 'Cheri', species: 'Cub', personality: 'Peppy', amiibo: true},
    {name: 'Chrissy', species: 'Rabbit', personality: 'Peppy', amiibo: true},
    {name: 'Cookie', species: 'Dog', personality: 'Peppy', amiibo: true},
    {name: 'Dotty', species: 'Rabbit', personality: 'Peppy', amiibo: true},
    {name: 'Felicity', species: 'Cat', personality: 'Peppy', amiibo: true},
    {name: 'Flora', species: 'Ostrich', personality: 'Peppy', amiibo: true},
    {name: 'Freckles', species: 'Duck', personality: 'Peppy', amiibo: true},
    {name: 'Gabi', species: 'Rabbit', personality: 'Peppy', amiibo: true},
    {name: 'Ketchup', species: 'Duck', personality: 'Peppy', amiibo: true},
    {name: 'Maddie', species: 'Dog', personality: 'Peppy', amiibo: true},
    {name: 'Merry', species: 'Cat', personality: 'Peppy', amiibo: true},
    {name: 'Nibbles', species: 'Squirrel', personality: 'Peppy', amiibo: true},
    {name: 'Pango', species: 'Anteater', personality: 'Peppy', amiibo: true},
    {name: 'Pate', species: 'Duck', personality: 'Peppy', amiibo: true},
    {name: 'Patty', species: 'Cow', personality: 'Peppy', amiibo: true},
    {name: 'Peanut', species: 'Squirrel', personality: 'Peppy', amiibo: true},
    {name: 'Peggy', species: 'Pig', personality: 'Peppy', amiibo: true},
    {name: 'Penelope', species: 'Mouse', personality: 'Peppy', amiibo: true},
    {name: 'Pinky', species: 'Bear', personality: 'Peppy', amiibo: true},
    {name: 'Piper', species: 'Bird', personality: 'Peppy', amiibo: true},
    {name: 'Pippy', species: 'Rabbit', personality: 'Peppy', amiibo: true},
    {name: 'Pompom', species: 'Duck', personality: 'Peppy', amiibo: true},
    {name: 'Puddles', species: 'Frog', personality: 'Peppy', amiibo: true},
    {name: 'Rosie', species: 'Cat', personality: 'Peppy', amiibo: true},
    {name: 'Ruby', species: 'Rabbit', personality: 'Peppy', amiibo: true},
    {name: 'Sprinkle', species: 'Penguin', personality: 'Peppy', amiibo: true},
    {name: 'Tabby', species: 'Cat', personality: 'Peppy', amiibo: true},
    {name: 'Tammi', species: 'Monkey', personality: 'Peppy', amiibo: true},
    {name: 'Tangy', species: 'Cat', personality: 'Peppy', amiibo: true},
    {name: 'Truggles', species: 'Pig', personality: 'Peppy', amiibo: true},
    {name: 'Tutu', species: 'Bear', personality: 'Peppy', amiibo: true},
    {name: 'Twiggy', species: 'Bird', personality: 'Peppy', amiibo: true},
    {name: 'Victoria', species: 'Horse', personality: 'Peppy', amiibo: true},
    {name: 'Wendy', species: 'Sheep', personality: 'Peppy', amiibo: true},
    {name: 'Winnie', species: 'Horse', personality: 'Peppy', amiibo: true},

    //sisterly/uchi villagers
    {name: 'Agnes', species: 'Pig', personality: 'Sisterly', amiibo: true},
    {name: 'Canberra', species: 'Koala', personality: 'Sisterly', amiibo: true},
    {name: 'Charlise', species: 'Bear', personality: 'Sisterly', amiibo: true},
    {name: 'Cherry', species: 'Dog', personality: 'Sisterly', amiibo: true},
    {name: 'Deirdre', species: 'Deer', personality: 'Sisterly', amiibo: true},
    {name: 'Diva', species: 'Frog', personality: 'Sisterly', amiibo: true},
    {name: 'Flo', species: 'Penguin', personality: 'Sisterly', amiibo: true},
    {name: 'Frita', species: 'Sheep', personality: 'Sisterly', amiibo: true},
    {name: 'Fuschia', species: 'Deer', personality: 'Sisterly', amiibo: true},
    {name: 'Hazel', species: 'Squirrel', personality: 'Sisterly', amiibo: true},
    {name: 'Katt', species: 'Cat', personality: 'Sisterly', amiibo: true},
    {name: 'Mira', species: 'Rabbit', personality: 'Sisterly', amiibo: true},
    {name: 'Muffy', species: 'Sheep', personality: 'Sisterly', amiibo: true},
    {name: 'Pashmina', species: 'Goat', personality: 'Sisterly', amiibo: true},
    {name: 'Paula', species: 'Bear', personality: 'Sisterly', amiibo: true},
    {name: 'Phoebe', species: 'Ostrich', personality: 'Sisterly', amiibo: true},
    {name: 'Plucky', species: 'Chicken', personality: 'Sisterly', amiibo: true},
    {name: 'Reneigh', species: 'Horse', personality: 'Sisterly', amiibo: false},
    {name: 'Renee', species: 'Rhino', personality: 'Sisterly', amiibo: true},
    {name: 'Rocket', species: 'Gorilla', personality: 'Sisterly', amiibo: true},
    {name: 'Shari', species: 'Monkey', personality: 'Sisterly', amiibo: true},
    {name: 'Sylvia', species: 'Kangaroo', personality: 'Sisterly', amiibo: true},
    {name: 'Tammy', species: 'Cub', personality: 'Sisterly', amiibo: true},
    {name: 'Ursula', species: 'Bear', personality: 'Sisterly', amiibo: true},

    //snooty villagers
    {name: 'Alli', species: 'Alligator', personality: 'Snooty', amiibo: true},
    {name: 'Amelia', species: 'Eagle', personality: 'Snooty', amiibo: true},
    {name: 'Ankha', species: 'Cat', personality: 'Snooty', amiibo: true},
    {name: 'Annalise', species: 'Horse', personality: 'Snooty', amiibo: true},
    {name: 'Astrid', species: 'Kangaroo', personality: 'Snooty', amiibo: true},
    {name: 'Baabara', species: 'Sheep', personality: 'Snooty', amiibo: true},
    {name: 'Becky', species: 'Chicken', personality: 'Snooty', amiibo: true},
    {name: 'Bitty', species: 'Hippo', personality: 'Snooty', amiibo: true},
    {name: 'Blaire', species: 'Squirrel', personality: 'Snooty', amiibo: true},
    {name: 'Blanche', species: 'Ostrich', personality: 'Snooty', amiibo: true},
    {name: 'Bree', species: 'Mouse', personality: 'Snooty', amiibo: true},
    {name: 'Broffina', species: 'Chicken', personality: 'Snooty', amiibo: true},
    {name: 'Cashmere', species: 'Sheep', personality: 'Snooty', amiibo: true},
    {name: 'Claudia', species: 'Tiger', personality: 'Snooty', amiibo: true},
    {name: 'Cleo', species: 'Horse', personality: 'Snooty', amiibo: true},
    {name: 'Diana', species: 'Deer', personality: 'Snooty', amiibo: true},
    {name: 'Elise', species: 'Monkey', personality: 'Snooty', amiibo: true},
    {name: 'Eloise', species: 'Elephant', personality: 'Snooty', amiibo: true},
    {name: 'Francine', species: 'Rabbit', personality: 'Snooty', amiibo: true},
    {name: 'Freya', species: 'Wolf', personality: 'Snooty', amiibo: true},
    {name: 'Friga', species: 'Penguin', personality: 'Snooty', amiibo: true},
    {name: 'Gigi', species: 'Frog', personality: 'Snooty', amiibo: true},
    {name: 'Gloria', species: 'Duck', personality: 'Snooty', amiibo: true},
    {name: 'Greta', species: 'Mouse', personality: 'Snooty', amiibo: true},
    {name: 'Gwen', species: 'Penguin', personality: 'Snooty', amiibo: true},
    {name: 'Judy', species: 'Cub', personality: 'Snooty', amiibo: false},
    {name: 'Julia', species: 'Ostrich', personality: 'Snooty', amiibo: true},
    {name: 'Kitty', species: 'Cat', personality: 'Snooty', amiibo: true},
    {name: 'Maelle', species: 'Duck', personality: 'Snooty', amiibo: true},
    {name: 'Mallary', species: 'Duck', personality: 'Snooty', amiibo: true},
    {name: 'Mathilda', species: 'Kangaroo', personality: 'Snooty', amiibo: true},
    {name: 'Mint', species: 'Squirrel', personality: 'Snooty', amiibo: true},
    {name: 'Miranda', species: 'Duck', personality: 'Snooty', amiibo: true},
    {name: 'Monique', species: 'Cat', personality: 'Snooty', amiibo: true},
    {name: 'Naomi', species: 'Cow', personality: 'Snooty', amiibo: true},
    {name: 'Olivia', species: 'Cat', personality: 'Snooty', amiibo: true},
    {name: 'Opal', species: 'Elephant', personality: 'Snooty', amiibo: true},
    {name: 'Pancetti', species: 'Pig', personality: 'Snooty', amiibo: true},
    {name: 'Pecan', species: 'Squirrel', personality: 'Snooty', amiibo: true},
    {name: 'Portia', species: 'Dog', personality: 'Snooty', amiibo: true},
    {name: 'Purrl', species: 'Cat', personality: 'Snooty', amiibo: true},
    {name: 'Queenie', species: 'Ostrich', personality: 'Snooty', amiibo: true},
    {name: 'Robin', species: 'Bird', personality: 'Snooty', amiibo: true},
    {name: 'Snooty', species: 'Anteater', personality: 'Snooty', amiibo: true},
    {name: 'Soleil', species: 'Hamster', personality: 'Snooty', amiibo: true},
    {name: 'Tasha', species: 'Squirrel', personality: 'Snooty', amiibo: true},
    {name: 'Tiffany', species: 'Rabbit', personality: 'Snooty', amiibo: true},
    {name: 'Timbra', species: 'Sheep', personality: 'Snooty', amiibo: true},
    {name: 'Tipper', species: 'Cow', personality: 'Snooty', amiibo: true},
    {name: 'Velma', species: 'Goat', personality: 'Snooty', amiibo: true},
    {name: 'Violet', species: 'Gorilla', personality: 'Snooty', amiibo: true},
    {name: 'Vivian', species: 'Wolf', personality: 'Snooty', amiibo: true},
    {name: 'Whitney', species: 'Wolf', personality: 'Snooty', amiibo: true},
    {name: 'Willow', species: 'Sheep', personality: 'Snooty', amiibo: true},
    {name: 'Yuka', species: 'Koala', personality: 'Snooty', amiibo: true},

    //cranky villagers
    {name: 'Kabuki', species: 'Cat', personality: 'Cranky', amiibo: true},
    {name: 'Hopper', species: 'Penguin', personality: 'Cranky', amiibo: true},
    {name: 'Ike', species: 'Bear', personality: 'Cranky', amiibo: true},
    {name: 'Gonzo', species: 'Koala', personality: 'Cranky', amiibo: true},
    {name: 'Gaston', species: 'Rabbit', personality: 'Cranky', amiibo: true},
    {name: 'Gruff', species: 'Goat', personality: 'Cranky', amiibo: true},
    {name: 'Groucho', species: 'Bear', personality: 'Cranky', amiibo: true},
    {name: 'Grizzly', species: 'Bear', personality: 'Cranky', amiibo: true},
    {name: 'Hamphrey', species: 'Hamster', personality: 'Cranky', amiibo: true},
    {name: 'Harry', species: 'Hippo', personality: 'Cranky', amiibo: true},
    {name: 'Dobie', species: 'Wolf', personality: 'Cranky', amiibo: true},
    {name: 'Curt', species: 'Bear', personality: 'Cranky', amiibo: true},
    {name: 'Croque', species: 'Frog', personality: 'Cranky', amiibo: true},
    {name: 'Cyrano', species: 'Anteater', personality: 'Cranky', amiibo: true},
    {name: 'Cyd', species: 'Elephant', personality: 'Cranky', amiibo: false},
    {name: 'Del', species: 'Alligator', personality: 'Cranky', amiibo: true},
    {name: 'Fang', species: 'Wolf', personality: 'Cranky', amiibo: true},
    {name: 'Elvis', species: 'Lion', personality: 'Cranky', amiibo: true},
    {name: 'Frank', species: 'Eagle', personality: 'Cranky', amiibo: true},
    {name: 'Angus', species: 'Bull', personality: 'Cranky', amiibo: true},
    {name: 'Admiral', species: 'Bird', personality: 'Cranky', amiibo: true},
    {name: 'Apollo', species: 'Eagle', personality: 'Cranky', amiibo: true},
    {name: 'Avery', species: 'Eagle', personality: 'Cranky', amiibo: true},
    {name: 'Camofrog', species: 'Frog', personality: 'Cranky', amiibo: true},
    {name: 'Butch', species: 'Dog', personality: 'Cranky', amiibo: true},
    {name: 'Buzz', species: 'Eagle', personality: 'Cranky', amiibo: true},
    {name: 'Boris', species: 'Pig', personality: 'Cranky', amiibo: true},
    {name: 'Boyd', species: 'Gorilla', personality: 'Cranky', amiibo: true},
    {name: 'Bruce', species: 'Deer', personality: 'Cranky', amiibo: true},
    {name: 'Chow', species: 'Bear', personality: 'Cranky', amiibo: true},
    {name: 'Chief', species: 'Wolf', personality: 'Cranky', amiibo: true},
    {name: 'Cesar', species: 'Gorilla', personality: 'Cranky', amiibo: true},
    {name: 'Peewee', species: 'Gorilla', personality: 'Cranky', amiibo: true},
    {name: 'Octavian', species: 'Octopus', personality: 'Cranky', amiibo: true},
    {name: 'Murphy', species: 'Cub', personality: 'Cranky', amiibo: true},
    {name: 'Limberg', species: 'Mouse', personality: 'Cranky', amiibo: true},
    {name: 'Lobo', species: 'Wolf', personality: 'Cranky', amiibo: true},
    {name: 'Knox', species: 'Chicken', personality: 'Cranky', amiibo: true},
    {name: 'Monty', species: 'Monkey', personality: 'Cranky', amiibo: true},
    {name: 'Static', species: 'Squirrel', personality: 'Cranky', amiibo: true},
    {name: 'Spike', species: 'Rhino', personality: 'Cranky', amiibo: true},
    {name: 'Ricky', species: 'Squirrel', personality: 'Cranky', amiibo: true},
    {name: 'Rasher', species: 'Pig', personality: 'Cranky', amiibo: true},
    {name: 'Rizzo', species: 'Mouse', personality: 'Cranky', amiibo: true},
    {name: 'Rocco', species: 'Hippo', personality: 'Cranky', amiibo: true},
    {name: 'Rolf', species: 'Tiger', personality: 'Cranky', amiibo: true},
    {name: 'Rooney', species: 'Kangaroo', personality: 'Cranky', amiibo: true},
    {name: 'Roscoe', species: 'Horse', personality: 'Cranky', amiibo: true},
    {name: 'Tom', species: 'Cat', personality: 'Cranky', amiibo: true},
    {name: 'T-Bone', species: 'Bull', personality: 'Cranky', amiibo: true},
    {name: 'Vladimir', species: 'Cub', personality: 'Cranky', amiibo: true},
    {name: 'Vic', species: 'Bull', personality: 'Cranky', amiibo: true},
    {name: 'Wart Jr.', species: 'Frog', personality: 'Cranky', amiibo: true},
    {name: 'Walt', species: 'Kangaroo', personality: 'Cranky', amiibo: true},
    {name: 'Wolfgang', species: 'Wolf', personality: 'Cranky', amiibo: true},

    //jock villagers
    {name: 'Jitters', species: 'Bird', personality: 'Jock', amiibo: true},
    {name: 'Jay', species: 'Bird', personality: 'Jock', amiibo: true},
    {name: 'Iggly', species: 'Penguin', personality: 'Jock', amiibo: true},
    {name: 'Genji', species: 'Rabbit', personality: 'Jock', amiibo: true},
    {name: 'Frobert', species: 'Frog', personality: 'Jock', amiibo: true},
    {name: 'Goose', species: 'Chicken', personality: 'Jock', amiibo: true},
    {name: 'Hamlet', species: 'Hamster', personality: 'Jock', amiibo: true},
    {name: 'Dom', species: 'Sheep', personality: 'Jock', amiibo: false},
    {name: 'Curly', species: 'Pig', personality: 'Jock', amiibo: true},
    {name: 'Drift', species: 'Frog', personality: 'Jock', amiibo: true},
    {name: 'Flip', species: 'Monkey', personality: 'Jock', amiibo: true},
    {name: 'Biff', species: 'Hippo', personality: 'Jock', amiibo: true},
    {name: 'Bill', species: 'Duck', personality: 'Jock', amiibo: true},
    {name: 'Billy', species: 'Goat', personality: 'Jock', amiibo: true},
    {name: 'Bam', species: 'Deer', personality: 'Jock', amiibo: true},
    {name: 'Antonio', species: 'Anteater', personality: 'Jock', amiibo: true},
    {name: 'Axel', species: 'Elephant', personality: 'Jock', amiibo: true},
    {name: 'Bud', species: 'Lion', personality: 'Jock', amiibo: true},
    {name: 'Buck', species: 'Horse', personality: 'Jock', amiibo: true},
    {name: 'Boots', species: 'Alligator', personality: 'Jock', amiibo: true},
    {name: 'Boone', species: 'Gorilla', personality: 'Jock', amiibo: true},
    {name: 'Cobb', species: 'Pig', personality: 'Jock', amiibo: true},
    {name: 'Coach', species: 'Bull', personality: 'Jock', amiibo: true},
    {name: 'Cousteau', species: 'Frog', personality: 'Jock', amiibo: true},
    {name: 'Poncho', species: 'Cub', personality: 'Jock', amiibo: true},
    {name: 'Peck', species: 'Bird', personality: 'Jock', amiibo: true},
    {name: 'Pierce', species: 'Eagle', personality: 'Jock', amiibo: true},
    {name: 'Mott', species: 'Lion', personality: 'Jock', amiibo: true},
    {name: 'Mac', species: 'Dog', personality: 'Jock', amiibo: true},
    {name: 'Lyman', species: 'Koala', personality: 'Jock', amiibo: true},
    {name: 'Louie', species: 'Gorilla', personality: 'Jock', amiibo: true},
    {name: 'Kevin', species: 'Pig', personality: 'Jock', amiibo: true},
    {name: 'Kid Cat', species: 'Cat', personality: 'Jock', amiibo: true},
    {name: 'Kody', species: 'Cub', personality: 'Jock', amiibo: true},
    {name: 'Leonardo', species: 'Tiger', personality: 'Jock', amiibo: true},
    {name: 'Moose', species: 'Mouse', personality: 'Jock', amiibo: true},
    {name: 'Sprocket', species: 'Ostrich', personality: 'Jock', amiibo: true},
    {name: 'Sparro', species: 'Bird', personality: 'Jock', amiibo: true},
    {name: 'Sly', species: 'Alligator', personality: 'Jock', amiibo: true},
    {name: 'Snake', species: 'Rabbit', personality: 'Jock', amiibo: true},
    {name: 'Samson', species: 'Mouse', personality: 'Jock', amiibo: true},
    {name: 'Rudy', species: 'Cat', personality: 'Jock', amiibo: true},
    {name: 'Rowan', species: 'Tiger', personality: 'Jock', amiibo: true},
    {name: 'Scoot', species: 'Duck', personality: 'Jock', amiibo: true},
    {name: 'Sheldon', species: 'Squirrel', personality: 'Jock', amiibo: true},
    {name: 'Ribbot', species: 'Frog', personality: 'Jock', amiibo: true},
    {name: 'Rod', species: 'Mouse', personality: 'Jock', amiibo: true},
    {name: 'Roald', species: 'Penguin', personality: 'Jock', amiibo: true},
    {name: 'Rory', species: 'Lion', personality: 'Jock', amiibo: true},
    {name: 'Tank', species: 'Rhino', personality: 'Jock', amiibo: true},
    {name: 'Teddy', species: 'Bear', personality: 'Jock', amiibo: true},
    {name: 'Sterling', species: 'Eagle', personality: 'Jock', amiibo: true},
    {name: 'Stinky', species: 'Cat', personality: 'Jock', amiibo: true},
    {name: 'Tad', species: 'Frog', personality: 'Jock', amiibo: true},
    {name: 'Tybalt', species: 'Tiger', personality: 'Jock', amiibo: true},

    //lazy villagers
    {name: 'Jeremiah', species: 'Frog', personality: 'Lazy', amiibo: true},
    {name: 'Joey', species: 'Duck', personality: 'Lazy', amiibo: true},
    {name: 'Hornsby', species: 'Rhino', personality: 'Lazy', amiibo: true},
    {name: 'Hopkins', species: 'Rabbit', personality: 'Lazy', amiibo: true},
    {name: 'Hugh', species: 'Pig', personality: 'Lazy', amiibo: true},
    {name: 'Jacob', species: 'Bird', personality: 'Lazy', amiibo: true},
    {name: 'Drake', species: 'Duck', personality: 'Lazy', amiibo: true},
    {name: 'Drago', species: 'Alligator', personality: 'Lazy', amiibo: true},
    {name: 'Doc', species: 'Rabbit', personality: 'Lazy', amiibo: true},
    {name: 'Derwin', species: 'Duck', personality: 'Lazy', amiibo: true},
    {name: 'Deli', species: 'Monkey', personality: 'Lazy', amiibo: true},
    {name: 'Dizzy', species: 'Elephant', personality: 'Lazy', amiibo: true},
    {name: 'Cranston', species: 'Ostrich', personality: 'Lazy', amiibo: true},
    {name: 'Cube', species: 'Penguin', personality: 'Lazy', amiibo: true},
    {name: 'Erik', species: 'Deer', personality: 'Lazy', amiibo: true},
    {name: 'Egbert', species: 'Chicken', personality: 'Lazy', amiibo: true},
    {name: 'Elmer', species: 'Horse', personality: 'Lazy', amiibo: true},
    {name: 'Filbert', species: 'Squirrel', personality: 'Lazy', amiibo: true},
    {name: 'Bob', species: 'Cat', personality: 'Lazy', amiibo: true},
    {name: 'Biskit', species: 'Dog', personality: 'Lazy', amiibo: true},
    {name: 'Big Top', species: 'Elephant', personality: 'Lazy', amiibo: true},
    {name: 'Barold', species: 'Cub', personality: 'Lazy', amiibo: true},
    {name: 'Beau', species: 'Deer', personality: 'Lazy', amiibo: true},
    {name: 'Benedict', species: 'Chicken', personality: 'Lazy', amiibo: true},
    {name: 'Benjamin', species: 'Dog', personality: 'Lazy', amiibo: true},
    {name: 'Anchovy', species: 'Bird', personality: 'Lazy', amiibo: true},
    {name: 'Al', species: 'Gorilla', personality: 'Lazy', amiibo: true},
    {name: 'Alfonso', species: 'Alligator', personality: 'Lazy', amiibo: true},
    {name: 'Bones', species: 'Dog', personality: 'Lazy', amiibo: true},
    {name: 'Boomer', species: 'Penguin', personality: 'Lazy', amiibo: true},
    {name: 'Broccolo', species: 'Mouse', personality: 'Lazy', amiibo: true},
    {name: 'Chester', species: 'Cub', personality: 'Lazy', amiibo: true},
    {name: 'Clyde', species: 'Horse', personality: 'Lazy', amiibo: true},
    {name: 'Clay', species: 'Hamster', personality: 'Lazy', amiibo: true},
    {name: 'Claude', species: 'Rabbit', personality: 'Lazy', amiibo: true},
    {name: 'Cole', species: 'Cat', personality: 'Lazy', amiibo: true},
    {name: 'Punchy', species: 'Cat', personality: 'Lazy', amiibo: true},
    {name: 'Pudge', species: 'Cub', personality: 'Lazy', amiibo: true},
    {name: 'Puck', species: 'Penguin', personality: 'Lazy', amiibo: true},
    {name: 'Prince', species: 'Frog', personality: 'Lazy', amiibo: true},
    {name: 'Nate', species: 'Bear', personality: 'Lazy', amiibo: true},
    {name: 'Ozzie', species: 'Koala', personality: 'Lazy', amiibo: true},
    {name: 'Papi', species: 'Horse', personality: 'Lazy', amiibo: true},
    {name: 'Paolo', species: 'Elephant', personality: 'Lazy', amiibo: true},
    {name: 'Lucky', species: 'Dog', personality: 'Lazy', amiibo: true},
    {name: 'Marcel', species: 'Dog', personality: 'Lazy', amiibo: true},
    {name: 'Moe', species: 'Cat', personality: 'Lazy', amiibo: true},
    {name: 'Spork', species: 'Pig', personality: 'Lazy', amiibo: true},
    {name: 'Simon', species: 'Monkey', personality: 'Lazy', amiibo: true},
    {name: 'Sherb', species: 'Goat', personality: 'Lazy', amiibo: false},
    {name: 'Rex', species: 'Lion', personality: 'Lazy', amiibo: true},
    {name: 'Raddle', species: 'Frog', personality: 'Lazy', amiibo: true},
    {name: 'Rodeo', species: 'Bull', personality: 'Lazy', amiibo: true},
    {name: 'Stu', species: 'Bull', personality: 'Lazy', amiibo: true},
    {name: 'Stitches', species: 'Cub', personality: 'Lazy', amiibo: true},
    {name: 'Tucker', species: 'Elephant', personality: 'Lazy', amiibo: true},
    {name: 'Weber', species: 'Duck', personality: 'Lazy', amiibo: true},
    {name: 'Wade', species: 'Penguin', personality: 'Lazy', amiibo: true},
    {name: 'Walker', species: 'Dog', personality: 'Lazy', amiibo: true},
    {name: 'Zucker', species: 'Octopus', personality: 'Lazy', amiibo: true},

    //smug villagers
    {name: 'Ken', species: 'Chicken', personality: 'Smug', amiibo: true},
    {name: 'Keaton', species: 'Eagle', personality: 'Smug', amiibo: true},
    {name: 'Julian', species: 'Horse', personality: 'Smug', amiibo: true},
    {name: 'Huck', species: 'Frog', personality: 'Smug', amiibo: true},
    {name: 'Henry', species: 'Frog', personality: 'Smug', amiibo: true},
    {name: 'Hippeux', species: 'Hippo', personality: 'Smug', amiibo: true},
    {name: 'Jacques', species: 'Bird', personality: 'Smug', amiibo: true},
    {name: 'Graham', species: 'Hamster', personality: 'Smug', amiibo: true},
    {name: 'Hans', species: 'Gorilla', personality: 'Smug', amiibo: true},
    {name: 'Curlos', species: 'Sheep', personality: 'Smug', amiibo: true},
    {name: 'Eugene', species: 'Koala', personality: 'Smug', amiibo: true},
    {name: 'Ed', species: 'Horse', personality: 'Smug', amiibo: true},
    {name: 'Beardo', species: 'Bear', personality: 'Smug', amiibo: true},
    {name: 'Chops', species: 'Pig', personality: 'Smug', amiibo: true},
    {name: 'Chadder', species: 'Mouse', personality: 'Smug', amiibo: true},
    {name: 'Colton', species: 'Horse', personality: 'Smug', amiibo: true},
    {name: 'Phil', species: 'Ostrich', personality: 'Smug', amiibo: true},
    {name: 'Pietro', species: 'Sheep', personality: 'Smug', amiibo: true},
    {name: 'Olaf', species: 'Anteater', personality: 'Smug', amiibo: true},
    {name: 'O\'Hare', species: 'Rabbit', personality: 'Smug', amiibo: true},
    {name: 'Lucha', species: 'Bird', personality: 'Smug', amiibo: true},
    {name: 'Lionel', species: 'Lion', personality: 'Smug', amiibo: true},
    {name: 'Lopez', species: 'Deer', personality: 'Smug', amiibo: true},
    {name: 'Kidd', species: 'Goat', personality: 'Smug', amiibo: true},
    {name: 'Klaus', species: 'Bear', personality: 'Smug', amiibo: true},
    {name: 'Kyle', speces: 'Wolf', personality: 'Smug', amiibo: true},
    {name: 'Leopold', species: 'Lion', personality: 'Smug', amiibo: true},
    {name: 'Marshal', species: 'Squirrel', personality: 'Smug', amiibo: true},
    {name: 'Shep', species: 'Dog', personality: 'Smug', amiibo: true},
    {name: 'Quillson', species: 'Duck', personality: 'Smug', amiibo: true},
    {name: 'Raymond', species: 'Cat', personality: 'Smug', amiibo: false},
    {name: 'Rodney', species: 'Hamster', personality: 'Smug', amiibo: true},
    {name: 'Tex', species: 'Penguin', personality: 'Smug', amiibo: true},
    {name: 'Zell', species: 'Deer', personality: 'Smug', amiibo: true},
]
    




     
    







