$(document).ready(function () {
    // Data JSON yang digabungkan dan diperbarui untuk semua template
    const templateData = [
        {
            "nama": "Abstract Flag",
            "kategori": "",
            "gambar": "_screens/Abstract Flag.jpeg"
        },
        {
            "nama": "Academic Gala",
            "kategori": "",
            "gambar": "_screens/Academic Gala.jpeg"
        },
        {
            "nama": "Academic Green",
            "kategori": "",
            "gambar": "_screens/Academic Green.jpeg"
        },
        {
            "nama": "Art Deco Gold",
            "kategori": "",
            "gambar": "_screens/Art Deco Gold.jpeg"
        },
        {
            "nama": "Autumn Arch Wedding",
            "kategori": "",
            "gambar": "_screens/Autumn Arch Wedding.jpeg"
        },
        {
            "nama": "Autumn Blush",
            "kategori": "",
            "gambar": "_screens/Autumn Blush.jpeg"
        },
        {
            "nama": "Autumn Floral Corner",
            "kategori": "",
            "gambar": "_screens/Autumn Floral Corner.jpeg"
        },
        {
            "nama": "Autumn Floral Lineart",
            "kategori": "",
            "gambar": "_screens/Autumn Floral Lineart.jpeg"
        },
        {
            "nama": "Autumn Oriental",
            "kategori": "",
            "gambar": "_screens/Autumn Oriental.jpeg"
        },
        {
            "nama": "Azure Celebration",
            "kategori": "",
            "gambar": "_screens/Azure Celebration.jpeg"
        },
        {
            "nama": "Baby Shark Birthday",
            "kategori": "",
            "gambar": "_screens/Baby Shark Birthday.jpeg"
        },
        {
            "nama": "Banjar Royalty",
            "kategori": "",
            "gambar": "_screens/Banjar Royalty.jpeg"
        },
        {
            "nama": "Batik Celebration",
            "kategori": "",
            "gambar": "_screens/Batik Celebration.jpeg"
        },
        {
            "nama": "Beach Sunset Wedding",
            "kategori": "",
            "gambar": "_screens/Beach Sunset Wedding.jpeg"
        },
        {
            "nama": "Beige Gunungan Wedding",
            "kategori": "",
            "gambar": "_screens/Beige Gunungan Wedding.jpeg"
        },
        {
            "nama": "Beige Marble Wedding",
            "kategori": "",
            "gambar": "_screens/Beige Marble Wedding.jpeg"
        },
        {
            "nama": "Beige Purple Flower Wedding",
            "kategori": "",
            "gambar": "_screens/Beige Purple Flower Wedding.jpeg"
        },
        {
            "nama": "Beige Ramadan Lanterns",
            "kategori": "",
            "gambar": "_screens/Beige Ramadan Lanterns.jpeg"
        },
        {
            "nama": "Betawi Joker",
            "kategori": "",
            "gambar": "_screens/Betawi Joker.jpeg"
        },
        {
            "nama": "Bikini Bottom Bash",
            "kategori": "",
            "gambar": "_screens/Bikini Bottom Bash.jpeg"
        },
        {
            "nama": "Black Gold Artdeco Birthday",
            "kategori": "",
            "gambar": "_screens/Black Gold Artdeco Birthday.jpeg"
        },
        {
            "nama": "Black Gold Corner Leaf",
            "kategori": "",
            "gambar": "_screens/Black Gold Corner Leaf.jpeg"
        },
        {
            "nama": "Black Gold Elegance",
            "kategori": "",
            "gambar": "_screens/Black Gold Elegance.jpeg"
        },
        {
            "nama": "Black Gold Formal Graduation",
            "kategori": "",
            "gambar": "_screens/Black Gold Formal Graduation.jpeg"
        },
        {
            "nama": "Black Gold Gunungan",
            "kategori": "",
            "gambar": "_screens/Black Gold Gunungan.jpeg"
        },
        {
            "nama": "Black Gold Mandala",
            "kategori": "",
            "gambar": "_screens/Black Gold Mandala.jpeg"
        },
        {
            "nama": "Black Gold Wedding",
            "kategori": "",
            "gambar": "_screens/Black Gold Wedding.jpeg"
        },
        {
            "nama": "Black Liquid Gold Wedding",
            "kategori": "",
            "gambar": "_screens/Black Liquid Gold Wedding.jpeg"
        },
        {
            "nama": "Black Pine Forest Wedding",
            "kategori": "",
            "gambar": "_screens/Black Pine Forest Wedding.jpeg"
        },
        {
            "nama": "Blue Butterfly Wedding",
            "kategori": "",
            "gambar": "_screens/Blue Butterfly Wedding.jpeg"
        },
        {
            "nama": "Blue Chick Khitanan",
            "kategori": "",
            "gambar": "_screens/Blue Chick Khitanan.jpeg"
        },
        {
            "nama": "Blue Constellation Wedding",
            "kategori": "",
            "gambar": "_screens/Blue Constellation Wedding.jpeg"
        },
        {
            "nama": "Blue Diagonal Minimalist",
            "kategori": "",
            "gambar": "_screens/Blue Diagonal Minimalist.jpeg"
        },
        {
            "nama": "Blue Floral Hexagon",
            "kategori": "",
            "gambar": "_screens/Blue Floral Hexagon.jpeg"
        },
        {
            "nama": "Blue Floral Tasyakuran",
            "kategori": "",
            "gambar": "_screens/Blue Floral Tasyakuran.jpeg"
        },
        {
            "nama": "Blue Floral Wreath Monogram",
            "kategori": "",
            "gambar": "_screens/Blue Floral Wreath Monogram.jpeg"
        },
        {
            "nama": "Blue Gold Grand Opening",
            "kategori": "",
            "gambar": "_screens/Blue Gold Grand Opening.jpeg"
        },
        {
            "nama": "Blue Gold Marble Monogram",
            "kategori": "",
            "gambar": "_screens/Blue Gold Marble Monogram.jpeg"
        },
        {
            "nama": "Blue Gold Splash Khitan",
            "kategori": "",
            "gambar": "_screens/Blue Gold Splash Khitan.jpeg"
        },
        {
            "nama": "Blue Indian Groom",
            "kategori": "",
            "gambar": "_screens/Blue Indian Groom.jpeg"
        },
        {
            "nama": "Blue Minang",
            "kategori": "",
            "gambar": "_screens/Blue Minang.jpeg"
        },
        {
            "nama": "Blue Mosque Iftar",
            "kategori": "",
            "gambar": "_screens/Blue Mosque Iftar.jpeg"
        },
        {
            "nama": "Blue Peacock Wedding",
            "kategori": "",
            "gambar": "_screens/Blue Peacock Wedding.jpeg"
        },
        {
            "nama": "Blue Sky Aqiqah",
            "kategori": "",
            "gambar": "_screens/Blue Sky Aqiqah.jpeg"
        },
        {
            "nama": "Blue Starry Night Wedding",
            "kategori": "",
            "gambar": "_screens/Blue Starry Night Wedding.jpeg"
        },
        {
            "nama": "Blue Texture Rose Arch",
            "kategori": "",
            "gambar": "_screens/Blue Texture Rose Arch.jpeg"
        },
        {
            "nama": "Blue Traditional Khitan",
            "kategori": "",
            "gambar": "_screens/Blue Traditional Khitan.jpeg"
        },
        {
            "nama": "Blue Watercolor Frame Aqiqah",
            "kategori": "",
            "gambar": "_screens/Blue Watercolor Frame Aqiqah.jpeg"
        },
        {
            "nama": "Blue Watercolor Splash",
            "kategori": "",
            "gambar": "_screens/Blue Watercolor Splash.jpeg"
        },
        {
            "nama": "Blue Watercolor Wedding",
            "kategori": "",
            "gambar": "_screens/Blue Watercolor Wedding.jpeg"
        },
        {
            "nama": "Blue Watercolor",
            "kategori": "",
            "gambar": "_screens/Blue Watercolor.jpeg"
        },
        {
            "nama": "Blushing Blooms",
            "kategori": "",
            "gambar": "_screens/Blushing Blooms.jpeg"
        },
        {
            "nama": "Blushing Romance",
            "kategori": "",
            "gambar": "_screens/Blushing Romance.jpeg"
        },
        {
            "nama": "Bni Heroes Aurora",
            "kategori": "",
            "gambar": "_screens/Bni Heroes Aurora.jpeg"
        },
        {
            "nama": "Bni Heroes Corporate Blue",
            "kategori": "",
            "gambar": "_screens/Bni Heroes Corporate Blue.jpeg"
        },
        {
            "nama": "Bohemian Collage",
            "kategori": "",
            "gambar": "_screens/Bohemian Collage.jpeg"
        },
        {
            "nama": "Boho Couple Wedding",
            "kategori": "",
            "gambar": "_screens/Boho Couple Wedding.jpeg"
        },
        {
            "nama": "Bold Ambition",
            "kategori": "",
            "gambar": "_screens/Bold Ambition.jpeg"
        },
        {
            "nama": "Bold Reveal",
            "kategori": "",
            "gambar": "_screens/Bold Reveal.jpeg"
        },
        {
            "nama": "Bold Yellow Khitanan",
            "kategori": "",
            "gambar": "_screens/Bold Yellow Khitanan.jpeg"
        },
        {
            "nama": "Botanical Romance",
            "kategori": "",
            "gambar": "_screens/Botanical Romance.jpeg"
        },
        {
            "nama": "Bright Blue Kids Birthday",
            "kategori": "",
            "gambar": "_screens/Bright Blue Kids Birthday.jpeg"
        },
        {
            "nama": "Brown Gold Ramadan",
            "kategori": "",
            "gambar": "_screens/Brown Gold Ramadan.jpeg"
        },
        {
            "nama": "Brown Gold Walimatulurs",
            "kategori": "",
            "gambar": "_screens/Brown Gold Walimatulurs.jpeg"
        },
        {
            "nama": "Bugis Velvet",
            "kategori": "",
            "gambar": "_screens/Bugis Velvet.jpeg"
        },
        {
            "nama": "Bunny Celebration",
            "kategori": "",
            "gambar": "_screens/Bunny Celebration.jpeg"
        },
        {
            "nama": "Bunny Garden",
            "kategori": "",
            "gambar": "_screens/Bunny Garden.jpeg"
        },
        {
            "nama": "Butterfly Whispers",
            "kategori": "",
            "gambar": "_screens/Butterfly Whispers.jpeg"
        },
        {
            "nama": "Bw Photo Blue Butterfly",
            "kategori": "",
            "gambar": "_screens/Bw Photo Blue Butterfly.jpeg"
        },
        {
            "nama": "Bw Photo Floral Frame",
            "kategori": "",
            "gambar": "_screens/Bw Photo Floral Frame.jpeg"
        },
        {
            "nama": "Bw Photo Green Leaf Frame",
            "kategori": "",
            "gambar": "_screens/Bw Photo Green Leaf Frame.jpeg"
        },
        {
            "nama": "Bw Photo Lavender Border",
            "kategori": "",
            "gambar": "_screens/Bw Photo Lavender Border.jpeg"
        },
        {
            "nama": "Bw Photo Pink Splash",
            "kategori": "",
            "gambar": "_screens/Bw Photo Pink Splash.jpeg"
        },
        {
            "nama": "Candlelit Christmas",
            "kategori": "",
            "gambar": "_screens/Candlelit Christmas.jpeg"
        },
        {
            "nama": "Candy Pop",
            "kategori": "",
            "gambar": "_screens/Candy Pop.jpeg"
        },
        {
            "nama": "Car Racing Birthday",
            "kategori": "",
            "gambar": "_screens/Car Racing Birthday.jpeg"
        },
        {
            "nama": "Carnival Birthday",
            "kategori": "",
            "gambar": "_screens/Carnival Birthday.jpeg"
        },
        {
            "nama": "Cars Movie Birthday",
            "kategori": "",
            "gambar": "_screens/Cars Movie Birthday.jpeg"
        },
        {
            "nama": "Celestial Rite",
            "kategori": "",
            "gambar": "_screens/Celestial Rite.jpeg"
        },
        {
            "nama": "Celestial Soiree",
            "kategori": "",
            "gambar": "_screens/Celestial Soiree.jpeg"
        },
        {
            "nama": "Cerulean Reverie",
            "kategori": "",
            "gambar": "_screens/Cerulean Reverie.jpeg"
        },
        {
            "nama": "Chalkboard Celebration",
            "kategori": "",
            "gambar": "_screens/Chalkboard Celebration.jpeg"
        },
        {
            "nama": "Cheerful Safari Aqiqah",
            "kategori": "",
            "gambar": "_screens/Cheerful Safari Aqiqah.jpeg"
        },
        {
            "nama": "Cheerful Sky Graduation",
            "kategori": "",
            "gambar": "_screens/Cheerful Sky Graduation.jpeg"
        },
        {
            "nama": "Cherry Blossom Romance",
            "kategori": "",
            "gambar": "_screens/Cherry Blossom Romance.jpeg"
        },
        {
            "nama": "Chevron Safari",
            "kategori": "",
            "gambar": "_screens/Chevron Safari.jpeg"
        },
        {
            "nama": "Chibi Couple Wedding",
            "kategori": "",
            "gambar": "_screens/Chibi Couple Wedding.jpeg"
        },
        {
            "nama": "Chili Pepper Wedding",
            "kategori": "",
            "gambar": "_screens/Chili Pepper Wedding.jpeg"
        },
        {
            "nama": "Chinese Celebration",
            "kategori": "",
            "gambar": "_screens/Chinese Celebration.jpeg"
        },
        {
            "nama": "Chinese Cloud Wedding",
            "kategori": "",
            "gambar": "_screens/Chinese Cloud Wedding.jpeg"
        },
        {
            "nama": "Chinese New Year Birthday",
            "kategori": "",
            "gambar": "_screens/Chinese New Year Birthday.jpeg"
        },
        {
            "nama": "Chinese Temple Wedding",
            "kategori": "",
            "gambar": "_screens/Chinese Temple Wedding.jpeg"
        },
        {
            "nama": "Chinoiserie Charm",
            "kategori": "",
            "gambar": "_screens/Chinoiserie Charm.jpeg"
        },
        {
            "nama": "Christmas Bell Celebration",
            "kategori": "",
            "gambar": "_screens/Christmas Bell Celebration.jpeg"
        },
        {
            "nama": "Christmas Gift Celebration",
            "kategori": "",
            "gambar": "_screens/Christmas Gift Celebration.jpeg"
        },
        {
            "nama": "Cinderella Blue",
            "kategori": "",
            "gambar": "_screens/Cinderella Blue.jpeg"
        },
        {
            "nama": "Clasic Art",
            "kategori": "",
            "gambar": "_screens/Clasic Art.jpeg"
        },
        {
            "nama": "Classic Arch Wedding",
            "kategori": "",
            "gambar": "_screens/Classic Arch Wedding.jpeg"
        },
        {
            "nama": "CLassic Blue",
            "kategori": "",
            "gambar": "_screens/CLassic Blue.jpeg"
        },
        {
            "nama": "Classic Book Cover Wedding",
            "kategori": "",
            "gambar": "_screens/Classic Book Cover Wedding.jpeg"
        },
        {
            "nama": "Classic Cartoon Wedding",
            "kategori": "",
            "gambar": "_screens/Classic Cartoon Wedding.jpeg"
        },
        {
            "nama": "Classic Golden Arch Wedding",
            "kategori": "",
            "gambar": "_screens/Classic Golden Arch Wedding.jpeg"
        },
        {
            "nama": "Classic Monochrome",
            "kategori": "",
            "gambar": "_screens/Classic Monochrome.jpeg"
        },
        {
            "nama": "Classic Romance",
            "kategori": "",
            "gambar": "_screens/Classic Romance.jpeg"
        },
        {
            "nama": "Classical Building Monogram",
            "kategori": "",
            "gambar": "_screens/Classical Building Monogram.jpeg"
        },
        {
            "nama": "Clean Modern Talkshow",
            "kategori": "",
            "gambar": "_screens/Clean Modern Talkshow.jpeg"
        },
        {
            "nama": "Cny Boy Illustration",
            "kategori": "",
            "gambar": "_screens/Cny Boy Illustration.jpeg"
        },
        {
            "nama": "Cocomelon Birthday",
            "kategori": "",
            "gambar": "_screens/Cocomelon Birthday.jpeg"
        },
        {
            "nama": "Colorful Kids Celebration",
            "kategori": "",
            "gambar": "_screens/Colorful Kids Celebration.jpeg"
        },
        {
            "nama": "Colorful Tosca",
            "kategori": "",
            "gambar": "_screens/Colorful Tosca.jpeg"
        },
        {
            "nama": "Comic Conference",
            "kategori": "",
            "gambar": "_screens/Comic Conference.jpeg"
        },
        {
            "nama": "Comic Pop Art Khitanan",
            "kategori": "",
            "gambar": "_screens/Comic Pop Art Khitanan.jpeg"
        },
        {
            "nama": "Cool Blue Birthday",
            "kategori": "",
            "gambar": "_screens/Cool Blue Birthday.jpeg"
        },
        {
            "nama": "Corporate Blue Anniversary",
            "kategori": "",
            "gambar": "_screens/Corporate Blue Anniversary.jpeg"
        },
        {
            "nama": "Corporate Orange",
            "kategori": "",
            "gambar": "_screens/Corporate Orange.jpeg"
        },
        {
            "nama": "Corporate Roadmap",
            "kategori": "",
            "gambar": "_screens/Corporate Roadmap.jpeg"
        },
        {
            "nama": "Cream Gold Eid",
            "kategori": "",
            "gambar": "_screens/Cream Gold Eid.jpeg"
        },
        {
            "nama": "Cream Gold Gunungan",
            "kategori": "",
            "gambar": "_screens/Cream Gold Gunungan.jpeg"
        },
        {
            "nama": "Cream Purple Floral Arch",
            "kategori": "",
            "gambar": "_screens/Cream Purple Floral Arch.jpeg"
        },
        {
            "nama": "Creative Astronaut Birthday",
            "kategori": "",
            "gambar": "_screens/Creative Astronaut Birthday.jpeg"
        },
        {
            "nama": "Crimson Geometric",
            "kategori": "",
            "gambar": "_screens/Crimson Geometric.jpeg"
        },
        {
            "nama": "Crimson Gold Monogram",
            "kategori": "",
            "gambar": "_screens/Crimson Gold Monogram.jpeg"
        },
        {
            "nama": "Crimson Gold Wedding",
            "kategori": "",
            "gambar": "_screens/Crimson Gold Wedding.jpeg"
        },
        {
            "nama": "Crimson Gold",
            "kategori": "",
            "gambar": "_screens/Crimson Gold.jpeg"
        },
        {
            "nama": "Crimson Wayang",
            "kategori": "",
            "gambar": "_screens/Crimson Wayang.jpeg"
        },
        {
            "nama": "Cultural Forum",
            "kategori": "",
            "gambar": "_screens/Cultural Forum.jpeg"
        },
        {
            "nama": "Cute Dinosaur Birthday",
            "kategori": "",
            "gambar": "_screens/Cute Dinosaur Birthday.jpeg"
        },
        {
            "nama": "Cute Girl Pastel Birthday",
            "kategori": "",
            "gambar": "_screens/Cute Girl Pastel Birthday.jpeg"
        },
        {
            "nama": "Cute Safari Aqiqah",
            "kategori": "",
            "gambar": "_screens/Cute Safari Aqiqah.jpeg"
        },
        {
            "nama": "Cute Unicorn Birthday",
            "kategori": "",
            "gambar": "_screens/Cute Unicorn Birthday.jpeg"
        },
        {
            "nama": "Dark Blue Baby Photo Aqiqah",
            "kategori": "",
            "gambar": "_screens/Dark Blue Baby Photo Aqiqah.jpeg"
        },
        {
            "nama": "Dark Floral Cloche",
            "kategori": "",
            "gambar": "_screens/Dark Floral Cloche.jpeg"
        },
        {
            "nama": "Dark Floral Frame Wedding",
            "kategori": "",
            "gambar": "_screens/Dark Floral Frame Wedding.jpeg"
        },
        {
            "nama": "Dark Floral",
            "kategori": "",
            "gambar": "_screens/Dark Floral.jpeg"
        },
        {
            "nama": "Dark Gold Gaming Anniversary",
            "kategori": "",
            "gambar": "_screens/Dark Gold Gaming Anniversary.jpeg"
        },
        {
            "nama": "Dark Gold Ribbon Wedding",
            "kategori": "",
            "gambar": "_screens/Dark Gold Ribbon Wedding.jpeg"
        },
        {
            "nama": "Dark Red Texture Wedding",
            "kategori": "",
            "gambar": "_screens/Dark Red Texture Wedding.jpeg"
        },
        {
            "nama": "Dark Teal Texture Wedding",
            "kategori": "",
            "gambar": "_screens/Dark Teal Texture Wedding.jpeg"
        },
        {
            "nama": "Dayak Legacy",
            "kategori": "",
            "gambar": "_screens/Dayak Legacy.jpeg"
        },
        {
            "nama": "Dies Natalis Indonesia Map",
            "kategori": "",
            "gambar": "_screens/Dies Natalis Indonesia Map.jpeg"
        },
        {
            "nama": "Dove And Blossom",
            "kategori": "",
            "gambar": "_screens/Dove And Blossom.jpeg"
        },
        {
            "nama": "Dramatic Photo Wedding",
            "kategori": "",
            "gambar": "_screens/Dramatic Photo Wedding.jpeg"
        },
        {
            "nama": "Dramatic Red Birthday",
            "kategori": "",
            "gambar": "_screens/Dramatic Red Birthday.jpeg"
        },
        {
            "nama": "Dusty Blue Arch Aqiqah",
            "kategori": "",
            "gambar": "_screens/Dusty Blue Arch Aqiqah.jpeg"
        },
        {
            "nama": "Dusty Blue",
            "kategori": "",
            "gambar": "_screens/Dusty Blue.jpeg"
        },
        {
            "nama": "Dusty Rose Gold",
            "kategori": "",
            "gambar": "_screens/Dusty Rose Gold.jpeg"
        },
        {
            "nama": "Dutch House Wedding",
            "kategori": "",
            "gambar": "_screens/Dutch House Wedding.jpeg"
        },
        {
            "nama": "Earthy Floral Lineart",
            "kategori": "",
            "gambar": "_screens/Earthy Floral Lineart.jpeg"
        },
        {
            "nama": "Earthy Lineart Wedding",
            "kategori": "",
            "gambar": "_screens/Earthy Lineart Wedding.jpeg"
        },
        {
            "nama": "Eid Mubarak",
            "kategori": "",
            "gambar": "_screens/Eid Mubarak.jpeg"
        },
        {
            "nama": "Elegant Blue Graduation",
            "kategori": "",
            "gambar": "_screens/Elegant Blue Graduation.jpeg"
        },
        {
            "nama": "Elegant Earthtone Wedding",
            "kategori": "",
            "gambar": "_screens/Elegant Earthtone Wedding.jpeg"
        },
        {
            "nama": "Elegant Minimalist",
            "kategori": "",
            "gambar": "_screens/Elegant Minimalist.jpeg"
        },
        {
            "nama": "Elephant Dream",
            "kategori": "",
            "gambar": "_screens/Elephant Dream.jpeg"
        },
        {
            "nama": "Emerald Aqiqah",
            "kategori": "",
            "gambar": "_screens/Emerald Aqiqah.jpeg"
        },
        {
            "nama": "Emerald Celebration",
            "kategori": "",
            "gambar": "_screens/Emerald Celebration.jpeg"
        },
        {
            "nama": "Emerald Garden",
            "kategori": "",
            "gambar": "_screens/Emerald Garden.jpeg"
        },
        {
            "nama": "Emerald Glitter",
            "kategori": "",
            "gambar": "_screens/Emerald Glitter.jpeg"
        },
        {
            "nama": "Emerald Gold Script",
            "kategori": "",
            "gambar": "_screens/Emerald Gold Script.jpeg"
        },
        {
            "nama": "Enchanted Forest Sweet17",
            "kategori": "",
            "gambar": "_screens/Enchanted Forest Sweet17.jpeg"
        },
        {
            "nama": "Enchanted Forest",
            "kategori": "",
            "gambar": "_screens/Enchanted Forest.jpeg"
        },
        {
            "nama": "Energetic Release",
            "kategori": "",
            "gambar": "_screens/Energetic Release.jpeg"
        },
        {
            "nama": "Ethereal Bloom",
            "kategori": "",
            "gambar": "_screens/Ethereal Bloom.jpeg"
        },
        {
            "nama": "Ethnic Synergy",
            "kategori": "",
            "gambar": "_screens/Ethnic Synergy.jpeg"
        },
        {
            "nama": "Festive Tidings",
            "kategori": "",
            "gambar": "_screens/Festive Tidings.jpeg"
        },
        {
            "nama": "Film Romance",
            "kategori": "",
            "gambar": "_screens/Film Romance.jpeg"
        },
        {
            "nama": "Filmstrip Frame Wedding",
            "kategori": "",
            "gambar": "_screens/Filmstrip Frame Wedding.jpeg"
        },
        {
            "nama": "Flamingo Party Birthday",
            "kategori": "",
            "gambar": "_screens/Flamingo Party Birthday.jpeg"
        },
        {
            "nama": "Floral Photo Wedding",
            "kategori": "",
            "gambar": "_screens/Floral Photo Wedding.jpeg"
        },
        {
            "nama": "Floral Portrait Birthday",
            "kategori": "",
            "gambar": "_screens/Floral Portrait Birthday.jpeg"
        },
        {
            "nama": "Formal Inauguration",
            "kategori": "",
            "gambar": "_screens/Formal Inauguration.jpeg"
        },
        {
            "nama": "Frozen Birthday Party",
            "kategori": "",
            "gambar": "_screens/Frozen Birthday Party.jpeg"
        },
        {
            "nama": "Fruity Expo",
            "kategori": "",
            "gambar": "_screens/Fruity Expo.jpeg"
        },
        {
            "nama": "Fuchsia Script Wedding",
            "kategori": "",
            "gambar": "_screens/Fuchsia Script Wedding.jpeg"
        },
        {
            "nama": "Full Photo Wedding",
            "kategori": "",
            "gambar": "_screens/Full Photo Wedding.jpeg"
        },
        {
            "nama": "Galaxy Anniversary",
            "kategori": "",
            "gambar": "_screens/Galaxy Anniversary.jpeg"
        },
        {
            "nama": "Galaxy Concert",
            "kategori": "",
            "gambar": "_screens/Galaxy Concert.jpeg"
        },
        {
            "nama": "Gilded Jubilee",
            "kategori": "",
            "gambar": "_screens/Gilded Jubilee.jpeg"
        },
        {
            "nama": "Glamorous Maroon Wedding",
            "kategori": "",
            "gambar": "_screens/Glamorous Maroon Wedding.jpeg"
        },
        {
            "nama": "Glamour Night",
            "kategori": "",
            "gambar": "_screens/Glamour Night.jpeg"
        },
        {
            "nama": "Gold Chibi Wedding",
            "kategori": "",
            "gambar": "_screens/Gold Chibi Wedding.jpeg"
        },
        {
            "nama": "Gold Frame Green Leaf",
            "kategori": "",
            "gambar": "_screens/Gold Frame Green Leaf.jpeg"
        },
        {
            "nama": "Gold Sparkle Monument",
            "kategori": "",
            "gambar": "_screens/Gold Sparkle Monument.jpeg"
        },
        {
            "nama": "Gold Wreath Monogram",
            "kategori": "",
            "gambar": "_screens/Gold Wreath Monogram.jpeg"
        },
        {
            "nama": "Golden Archipelago",
            "kategori": "",
            "gambar": "_screens/Golden Archipelago.jpeg"
        },
        {
            "nama": "Golden Balloon Farewell",
            "kategori": "",
            "gambar": "_screens/Golden Balloon Farewell.jpeg"
        },
        {
            "nama": "Golden Birdcage Wedding",
            "kategori": "",
            "gambar": "_screens/Golden Birdcage Wedding.jpeg"
        },
        {
            "nama": "Golden Christmas",
            "kategori": "",
            "gambar": "_screens/Golden Christmas.jpeg"
        },
        {
            "nama": "Golden Drapery Event",
            "kategori": "",
            "gambar": "_screens/Golden Drapery Event.jpeg"
        },
        {
            "nama": "Golden Fairy Birthday",
            "kategori": "",
            "gambar": "_screens/Golden Fairy Birthday.jpeg"
        },
        {
            "nama": "Golden Floral",
            "kategori": "",
            "gambar": "_screens/Golden Floral.jpeg"
        },
        {
            "nama": "Golden Gate Wedding",
            "kategori": "",
            "gambar": "_screens/Golden Gate Wedding.jpeg"
        },
        {
            "nama": "Golden Leaf",
            "kategori": "",
            "gambar": "_screens/Golden Leaf.jpeg"
        },
        {
            "nama": "Golden Lion Aqiqah",
            "kategori": "",
            "gambar": "_screens/Golden Lion Aqiqah.jpeg"
        },
        {
            "nama": "Golden Moon Baby Aqiqah",
            "kategori": "",
            "gambar": "_screens/Golden Moon Baby Aqiqah.jpeg"
        },
        {
            "nama": "Golden Nativity",
            "kategori": "",
            "gambar": "_screens/Golden Nativity.jpeg"
        },
        {
            "nama": "Golden Stage Graduation",
            "kategori": "",
            "gambar": "_screens/Golden Stage Graduation.jpeg"
        },
        {
            "nama": "Golden Sunset Wedding",
            "kategori": "",
            "gambar": "_screens/Golden Sunset Wedding.jpeg"
        },
        {
            "nama": "Golden Wings Maroon",
            "kategori": "",
            "gambar": "_screens/Golden Wings Maroon.jpeg"
        },
        {
            "nama": "Grand Interior Aqiqah",
            "kategori": "",
            "gambar": "_screens/Grand Interior Aqiqah.jpeg"
        },
        {
            "nama": "Grand Mosque Halal Bihalal",
            "kategori": "",
            "gambar": "_screens/Grand Mosque Halal Bihalal.jpeg"
        },
        {
            "nama": "Green Gold Watercolor",
            "kategori": "",
            "gambar": "_screens/Green Gold Watercolor.jpeg"
        },
        {
            "nama": "Green Islamic Arch",
            "kategori": "",
            "gambar": "_screens/Green Islamic Arch.jpeg"
        },
        {
            "nama": "Green Leafy Khitanan",
            "kategori": "",
            "gambar": "_screens/Green Leafy Khitanan.jpeg"
        },
        {
            "nama": "Green Mosque Aqiqah",
            "kategori": "",
            "gambar": "_screens/Green Mosque Aqiqah.jpeg"
        },
        {
            "nama": "Green Mosque Shield",
            "kategori": "",
            "gambar": "_screens/Green Mosque Shield.jpeg"
        },
        {
            "nama": "Green Star Aqiqah",
            "kategori": "",
            "gambar": "_screens/Green Star Aqiqah.jpeg"
        },
        {
            "nama": "Green Watercolor Couple",
            "kategori": "",
            "gambar": "_screens/Green Watercolor Couple.jpeg"
        },
        {
            "nama": "Greenery Wreath Aqiqah",
            "kategori": "",
            "gambar": "_screens/Greenery Wreath Aqiqah.jpeg"
        },
        {
            "nama": "Grey Floral Arch",
            "kategori": "",
            "gambar": "_screens/Grey Floral Arch.jpeg"
        },
        {
            "nama": "Hajj Celebration Kaaba",
            "kategori": "",
            "gambar": "_screens/Hajj Celebration Kaaba.jpeg"
        },
        {
            "nama": "Hajj Pilgrimage",
            "kategori": "",
            "gambar": "_screens/Hajj Pilgrimage.jpeg"
        },
        {
            "nama": "Halloween Night",
            "kategori": "",
            "gambar": "_screens/Halloween Night.jpeg"
        },
        {
            "nama": "Harry Potter Wedding",
            "kategori": "",
            "gambar": "_screens/Harry Potter Wedding.jpeg"
        },
        {
            "nama": "Henna Hands Wedding",
            "kategori": "",
            "gambar": "_screens/Henna Hands Wedding.jpeg"
        },
        {
            "nama": "Heritage Nuptials",
            "kategori": "",
            "gambar": "_screens/Heritage Nuptials.jpeg"
        },
        {
            "nama": "Holographic Overlay Invitation",
            "kategori": "",
            "gambar": "_screens/Holographic Overlay Invitation.jpeg"
        },
        {
            "nama": "Icy Blue Wedding",
            "kategori": "",
            "gambar": "_screens/Icy Blue Wedding.jpeg"
        },
        {
            "nama": "Indonesian Independence Celebration",
            "kategori": "",
            "gambar": "_screens/Indonesian Independence Celebration.jpeg"
        },
        {
            "nama": "Indonesian Independence Day",
            "kategori": "",
            "gambar": "_screens/Indonesian Independence Day.jpeg"
        },
        {
            "nama": "Islamic Style",
            "kategori": "",
            "gambar": "_screens/Islamic Style.jpeg"
        },
        {
            "nama": "Japanese Minimalist",
            "kategori": "",
            "gambar": "_screens/Japanese Minimalist.jpeg"
        },
        {
            "nama": "Japanese Red Cloud",
            "kategori": "",
            "gambar": "_screens/Japanese Red Cloud.jpeg"
        },
        {
            "nama": "Javanese Diamond Frame Wedding",
            "kategori": "",
            "gambar": "_screens/Javanese Diamond Frame Wedding.jpeg"
        },
        {
            "nama": "Javanese Royalty",
            "kategori": "",
            "gambar": "_screens/Javanese Royalty.jpeg"
        },
        {
            "nama": "Javanese Turun Ayun",
            "kategori": "",
            "gambar": "_screens/Javanese Turun Ayun.jpeg"
        },
        {
            "nama": "Joyful Black Gold",
            "kategori": "",
            "gambar": "_screens/Joyful Black Gold.jpeg"
        },
        {
            "nama": "Jungle Friends Aqiqah",
            "kategori": "",
            "gambar": "_screens/Jungle Friends Aqiqah.jpeg"
        },
        {
            "nama": "Jungle Friends",
            "kategori": "",
            "gambar": "_screens/Jungle Friends.jpeg"
        },
        {
            "nama": "Karate Spirit",
            "kategori": "",
            "gambar": "_screens/Karate Spirit.jpeg"
        },
        {
            "nama": "Kids Playground Khitanan",
            "kategori": "",
            "gambar": "_screens/Kids Playground Khitanan.jpeg"
        },
        {
            "nama": "Lampung Siger",
            "kategori": "",
            "gambar": "_screens/Lampung Siger.jpeg"
        },
        {
            "nama": "Lavender Cloche Sweet16",
            "kategori": "",
            "gambar": "_screens/Lavender Cloche Sweet16.jpeg"
        },
        {
            "nama": "Lavender Sweet 17",
            "kategori": "",
            "gambar": "_screens/Lavender Sweet 17.jpeg"
        },
        {
            "nama": "Leafy Hexagon Monogram",
            "kategori": "",
            "gambar": "_screens/Leafy Hexagon Monogram.jpeg"
        },
        {
            "nama": "Leather Book Nusantara",
            "kategori": "",
            "gambar": "_screens/Leather Book Nusantara.jpeg"
        },
        {
            "nama": "Light Blue Minimalist Khitan",
            "kategori": "",
            "gambar": "_screens/Light Blue Minimalist Khitan.jpeg"
        },
        {
            "nama": "Lion Silhouette Wedding",
            "kategori": "",
            "gambar": "_screens/Lion Silhouette Wedding.jpeg"
        },
        {
            "nama": "Luxurious Interior",
            "kategori": "",
            "gambar": "_screens/Luxurious Interior.jpeg"
        },
        {
            "nama": "Madura Modern",
            "kategori": "",
            "gambar": "_screens/Madura Modern.jpeg"
        },
        {
            "nama": "Magenta Celebration",
            "kategori": "",
            "gambar": "_screens/Magenta Celebration.jpeg"
        },
        {
            "nama": "Maritime Inauguration",
            "kategori": "",
            "gambar": "_screens/Maritime Inauguration.jpeg"
        },
        {
            "nama": "Maroon Autumn Graduation",
            "kategori": "",
            "gambar": "_screens/Maroon Autumn Graduation.jpeg"
        },
        {
            "nama": "Maroon Bar Floral Monogram",
            "kategori": "",
            "gambar": "_screens/Maroon Bar Floral Monogram.jpeg"
        },
        {
            "nama": "Maroon Batik Wedding",
            "kategori": "",
            "gambar": "_screens/Maroon Batik Wedding.jpeg"
        },
        {
            "nama": "Maroon Botanical Wedding",
            "kategori": "",
            "gambar": "_screens/Maroon Botanical Wedding.jpeg"
        },
        {
            "nama": "Maroon Dust",
            "kategori": "",
            "gambar": "_screens/Maroon Dust.jpeg"
        },
        {
            "nama": "Maroon Floral Romance",
            "kategori": "",
            "gambar": "_screens/Maroon Floral Romance.jpeg"
        },
        {
            "nama": "Maroon Gold Sunburst",
            "kategori": "",
            "gambar": "_screens/Maroon Gold Sunburst.jpeg"
        },
        {
            "nama": "Maroon Gunungan Wedding",
            "kategori": "",
            "gambar": "_screens/Maroon Gunungan Wedding.jpeg"
        },
        {
            "nama": "Maroon Leaf Wedding",
            "kategori": "",
            "gambar": "_screens/Maroon Leaf Wedding.jpeg"
        },
        {
            "nama": "Maroon Minang",
            "kategori": "",
            "gambar": "_screens/Maroon Minang.jpeg"
        },
        {
            "nama": "Maroon Minimalist",
            "kategori": "",
            "gambar": "_screens/Maroon Minimalist.jpeg"
        },
        {
            "nama": "Maroon Wayang",
            "kategori": "",
            "gambar": "_screens/Maroon Wayang.jpeg"
        },
        {
            "nama": "Masquerade Party Purple",
            "kategori": "",
            "gambar": "_screens/Masquerade Party Purple.jpeg"
        },
        {
            "nama": "Matrimonial Chronicle",
            "kategori": "",
            "gambar": "_screens/Matrimonial Chronicle.jpeg"
        },
        {
            "nama": "Mecha Moon Celebration",
            "kategori": "",
            "gambar": "_screens/Mecha Moon Celebration.jpeg"
        },
        {
            "nama": "Midnight Bloom",
            "kategori": "",
            "gambar": "_screens/Midnight Bloom.jpeg"
        },
        {
            "nama": "Minang Heritage Wedding",
            "kategori": "",
            "gambar": "_screens/Minang Heritage Wedding.jpeg"
        },
        {
            "nama": "Minang Heritage",
            "kategori": "",
            "gambar": "_screens/Minang Heritage.jpeg"
        },
        {
            "nama": "Minecraft Birthday",
            "kategori": "",
            "gambar": "_screens/Minecraft Birthday.jpeg"
        },
        {
            "nama": "Minimalist Black Opening",
            "kategori": "",
            "gambar": "_screens/Minimalist Black Opening.jpeg"
        },
        {
            "nama": "Minimalist Blue Kajian",
            "kategori": "",
            "gambar": "_screens/Minimalist Blue Kajian.jpeg"
        },
        {
            "nama": "Minimalist Blue Monogram",
            "kategori": "",
            "gambar": "_screens/Minimalist Blue Monogram.jpeg"
        },
        {
            "nama": "Minimalist Gold Leaf Aqiqah",
            "kategori": "",
            "gambar": "_screens/Minimalist Gold Leaf Aqiqah.jpeg"
        },
        {
            "nama": "Minimalist House Logo",
            "kategori": "",
            "gambar": "_screens/Minimalist House Logo.jpeg"
        },
        {
            "nama": "Minimalist Line Art Aqiqah",
            "kategori": "",
            "gambar": "_screens/Minimalist Line Art Aqiqah.jpeg"
        },
        {
            "nama": "Minimalist Purple Wedding",
            "kategori": "",
            "gambar": "_screens/Minimalist Purple Wedding.jpeg"
        },
        {
            "nama": "Minimalist Teal Square",
            "kategori": "",
            "gambar": "_screens/Minimalist Teal Square.jpeg"
        },
        {
            "nama": "Minimalist White Gold",
            "kategori": "",
            "gambar": "_screens/Minimalist White Gold.jpeg"
        },
        {
            "nama": "Minion Birthday Party",
            "kategori": "",
            "gambar": "_screens/Minion Birthday Party.jpeg"
        },
        {
            "nama": "Mint Chibi Wedding",
            "kategori": "",
            "gambar": "_screens/Mint Chibi Wedding.jpeg"
        },
        {
            "nama": "Misty Mountain Leaves",
            "kategori": "",
            "gambar": "_screens/Misty Mountain Leaves.jpeg"
        },
        {
            "nama": "Modern Couple Illustration",
            "kategori": "",
            "gambar": "_screens/Modern Couple Illustration.jpeg"
        },
        {
            "nama": "Modern Graduation",
            "kategori": "",
            "gambar": "_screens/Modern Graduation.jpeg"
        },
        {
            "nama": "Modern Green Khitanan",
            "kategori": "",
            "gambar": "_screens/Modern Green Khitanan.jpeg"
        },
        {
            "nama": "Modern Portrait",
            "kategori": "",
            "gambar": "_screens/Modern Portrait.jpeg"
        },
        {
            "nama": "Modern Talk Show",
            "kategori": "",
            "gambar": "_screens/Modern Talk Show.jpeg"
        },
        {
            "nama": "Monas Wedding Invitation",
            "kategori": "",
            "gambar": "_screens/Monas Wedding Invitation.jpeg"
        },
        {
            "nama": "Monochrome Romance",
            "kategori": "",
            "gambar": "_screens/Monochrome Romance.jpeg"
        },
        {
            "nama": "Monochrome Sketch Wedding",
            "kategori": "",
            "gambar": "_screens/Monochrome Sketch Wedding.jpeg"
        },
        {
            "nama": "Moody Black White Wedding",
            "kategori": "",
            "gambar": "_screens/Moody Black White Wedding.jpeg"
        },
        {
            "nama": "Natural Greenery Wedding Photo",
            "kategori": "",
            "gambar": "_screens/Natural Greenery Wedding Photo.jpeg"
        },
        {
            "nama": "Nautical Charm",
            "kategori": "",
            "gambar": "_screens/Nautical Charm.jpeg"
        },
        {
            "nama": "Navy Blue Rose Wedding",
            "kategori": "",
            "gambar": "_screens/Navy Blue Rose Wedding.jpeg"
        },
        {
            "nama": "Navy Gold Celebration",
            "kategori": "",
            "gambar": "_screens/Navy Gold Celebration.jpeg"
        },
        {
            "nama": "Navy Gold Deer Aqiqah",
            "kategori": "",
            "gambar": "_screens/Navy Gold Deer Aqiqah.jpeg"
        },
        {
            "nama": "Navy Gold Ramadan",
            "kategori": "",
            "gambar": "_screens/Navy Gold Ramadan.jpeg"
        },
        {
            "nama": "Navy Gold Watercolor",
            "kategori": "",
            "gambar": "_screens/Navy Gold Watercolor.jpeg"
        },
        {
            "nama": "Navy Gold",
            "kategori": "",
            "gambar": "_screens/Navy Gold.jpeg"
        },
        {
            "nama": "Neon Future Iftar",
            "kategori": "",
            "gambar": "_screens/Neon Future Iftar.jpeg"
        },
        {
            "nama": "Neon Gamer 2",
            "kategori": "",
            "gambar": "_screens/Neon Gamer 2.jpeg"
        },
        {
            "nama": "Neon Gamer",
            "kategori": "",
            "gambar": "_screens/Neon Gamer.jpeg"
        },
        {
            "nama": "Neon Magenta Sweet17",
            "kategori": "",
            "gambar": "_screens/Neon Magenta Sweet17.jpeg"
        },
        {
            "nama": "Neon Pyramid Launch",
            "kategori": "",
            "gambar": "_screens/Neon Pyramid Launch.jpeg"
        },
        {
            "nama": "Nocturne Vow",
            "kategori": "",
            "gambar": "_screens/Nocturne Vow.jpeg"
        },
        {
            "nama": "Nusantara Beige Gold",
            "kategori": "",
            "gambar": "_screens/Nusantara Beige Gold.jpeg"
        },
        {
            "nama": "Nuzulul Quran Celebration",
            "kategori": "",
            "gambar": "_screens/Nuzulul Quran Celebration.jpeg"
        },
        {
            "nama": "Ocean Princess",
            "kategori": "",
            "gambar": "_screens/Ocean Princess.jpeg"
        },
        {
            "nama": "Official Inauguration",
            "kategori": "",
            "gambar": "_screens/Official Inauguration.jpeg"
        },
        {
            "nama": "Ornate Floral Frame Wedding",
            "kategori": "",
            "gambar": "_screens/Ornate Floral Frame Wedding.jpeg"
        },
        {
            "nama": "Ornate Red Arch Wedding",
            "kategori": "",
            "gambar": "_screens/Ornate Red Arch Wedding.jpeg"
        },
        {
            "nama": "Palace Illustration Walimatulurs",
            "kategori": "",
            "gambar": "_screens/Palace Illustration Walimatulurs.jpeg"
        },
        {
            "nama": "Papuan Blessing",
            "kategori": "",
            "gambar": "_screens/Papuan Blessing.jpeg"
        },
        {
            "nama": "Pastel Abstract Aqiqah",
            "kategori": "",
            "gambar": "_screens/Pastel Abstract Aqiqah.jpeg"
        },
        {
            "nama": "Pastel Dream Wedding",
            "kategori": "",
            "gambar": "_screens/Pastel Dream Wedding.jpeg"
        },
        {
            "nama": "Patriotic Floral Wedding",
            "kategori": "",
            "gambar": "_screens/Patriotic Floral Wedding.jpeg"
        },
        {
            "nama": "Paw Patrol Sky Birthday",
            "kategori": "",
            "gambar": "_screens/Paw Patrol Sky Birthday.jpeg"
        },
        {
            "nama": "Peacock Floral Arch Wedding",
            "kategori": "",
            "gambar": "_screens/Peacock Floral Arch Wedding.jpeg"
        },
        {
            "nama": "Peacock Garden",
            "kategori": "",
            "gambar": "_screens/Peacock Garden.jpeg"
        },
        {
            "nama": "Peacock Shadow Wedding",
            "kategori": "",
            "gambar": "_screens/Peacock Shadow Wedding.jpeg"
        },
        {
            "nama": "Peony Blush",
            "kategori": "",
            "gambar": "_screens/Peony Blush.jpeg"
        },
        {
            "nama": "Phinisi Boat Drawing",
            "kategori": "",
            "gambar": "_screens/Phinisi Boat Drawing.jpeg"
        },
        {
            "nama": "Pink Blue Watercolor Sweet17",
            "kategori": "",
            "gambar": "_screens/Pink Blue Watercolor Sweet17.jpeg"
        },
        {
            "nama": "Pink Castle Aqiqah",
            "kategori": "",
            "gambar": "_screens/Pink Castle Aqiqah.jpeg"
        },
        {
            "nama": "Pink Flamingo Sweet17",
            "kategori": "",
            "gambar": "_screens/Pink Flamingo Sweet17.jpeg"
        },
        {
            "nama": "Pink Floral Watercolor",
            "kategori": "",
            "gambar": "_screens/Pink Floral Watercolor.jpeg"
        },
        {
            "nama": "Pink Floral Wreath Aqiqah",
            "kategori": "",
            "gambar": "_screens/Pink Floral Wreath Aqiqah.jpeg"
        },
        {
            "nama": "Pink Gold Celebration",
            "kategori": "",
            "gambar": "_screens/Pink Gold Celebration.jpeg"
        },
        {
            "nama": "Pink Gold Polkadot Birthday",
            "kategori": "",
            "gambar": "_screens/Pink Gold Polkadot Birthday.jpeg"
        },
        {
            "nama": "Pink Orange Watercolor Splash",
            "kategori": "",
            "gambar": "_screens/Pink Orange Watercolor Splash.jpeg"
        },
        {
            "nama": "Pink Rose Script",
            "kategori": "",
            "gambar": "_screens/Pink Rose Script.jpeg"
        },
        {
            "nama": "Pink Unicorn Dream",
            "kategori": "",
            "gambar": "_screens/Pink Unicorn Dream.jpeg"
        },
        {
            "nama": "Pink Watercolor Splash",
            "kategori": "",
            "gambar": "_screens/Pink Watercolor Splash.jpeg"
        },
        {
            "nama": "Pinky Floris",
            "kategori": "",
            "gambar": "_screens/Pinky Floris.jpeg"
        },
        {
            "nama": "Pj Masks Birthday",
            "kategori": "",
            "gambar": "_screens/Pj Masks Birthday.jpeg"
        },
        {
            "nama": "Playful Opening",
            "kategori": "",
            "gambar": "_screens/Playful Opening.jpeg"
        },
        {
            "nama": "Purple Feather Wreath Sweet17",
            "kategori": "",
            "gambar": "_screens/Purple Feather Wreath Sweet17.jpeg"
        },
        {
            "nama": "Purple Floral Arch Wedding",
            "kategori": "",
            "gambar": "_screens/Purple Floral Arch Wedding.jpeg"
        },
        {
            "nama": "Purple Floral",
            "kategori": "",
            "gambar": "_screens/Purple Floral.jpeg"
        },
        {
            "nama": "Purple Giveaway Event",
            "kategori": "",
            "gambar": "_screens/Purple Giveaway Event.jpeg"
        },
        {
            "nama": "Purple Gold Chandelier",
            "kategori": "",
            "gambar": "_screens/Purple Gold Chandelier.jpeg"
        },
        {
            "nama": "Purple Gold Dot Wedding",
            "kategori": "",
            "gambar": "_screens/Purple Gold Dot Wedding.jpeg"
        },
        {
            "nama": "Purple Gold Ramadan",
            "kategori": "",
            "gambar": "_screens/Purple Gold Ramadan.jpeg"
        },
        {
            "nama": "Purple Islamic Pengajian",
            "kategori": "",
            "gambar": "_screens/Purple Islamic Pengajian.jpeg"
        },
        {
            "nama": "Purple Wayang",
            "kategori": "",
            "gambar": "_screens/Purple Wayang.jpeg"
        },
        {
            "nama": "Quantum Odyssey",
            "kategori": "",
            "gambar": "_screens/Quantum Odyssey.jpeg"
        },
        {
            "nama": "Racing One",
            "kategori": "",
            "gambar": "_screens/Racing One.jpeg"
        },
        {
            "nama": "Railway Festival",
            "kategori": "",
            "gambar": "_screens/Railway Festival.jpeg"
        },
        {
            "nama": "Rainbow Convention",
            "kategori": "",
            "gambar": "_screens/Rainbow Convention.jpeg"
        },
        {
            "nama": "Rapunzel Letter Birthday",
            "kategori": "",
            "gambar": "_screens/Rapunzel Letter Birthday.jpeg"
        },
        {
            "nama": "Rapunzel Tower Aqiqah",
            "kategori": "",
            "gambar": "_screens/Rapunzel Tower Aqiqah.jpeg"
        },
        {
            "nama": "Red Arch Palm Walimatulurs",
            "kategori": "",
            "gambar": "_screens/Red Arch Palm Walimatulurs.jpeg"
        },
        {
            "nama": "Red Crown Wedding",
            "kategori": "",
            "gambar": "_screens/Red Crown Wedding.jpeg"
        },
        {
            "nama": "Red Gold Emblem Wedding",
            "kategori": "",
            "gambar": "_screens/Red Gold Emblem Wedding.jpeg"
        },
        {
            "nama": "Red Gold Ornamental",
            "kategori": "",
            "gambar": "_screens/Red Gold Ornamental.jpeg"
        },
        {
            "nama": "Red Gold Photo Wedding",
            "kategori": "",
            "gambar": "_screens/Red Gold Photo Wedding.jpeg"
        },
        {
            "nama": "Red Gold Sparkle Wedding",
            "kategori": "",
            "gambar": "_screens/Red Gold Sparkle Wedding.jpeg"
        },
        {
            "nama": "Red Mosque Walimatulurs",
            "kategori": "",
            "gambar": "_screens/Red Mosque Walimatulurs.jpeg"
        },
        {
            "nama": "Red Orange Swoosh Khitanan",
            "kategori": "",
            "gambar": "_screens/Red Orange Swoosh Khitanan.jpeg"
        },
        {
            "nama": "Red Rose Photo Wedding",
            "kategori": "",
            "gambar": "_screens/Red Rose Photo Wedding.jpeg"
        },
        {
            "nama": "Red Shield Invitation",
            "kategori": "",
            "gambar": "_screens/Red Shield Invitation.jpeg"
        },
        {
            "nama": "Red Text Green Wreath",
            "kategori": "",
            "gambar": "_screens/Red Text Green Wreath.jpeg"
        },
        {
            "nama": "Retro Stripes Event",
            "kategori": "",
            "gambar": "_screens/Retro Stripes Event.jpeg"
        },
        {
            "nama": "Rooster Khitan Celebration",
            "kategori": "",
            "gambar": "_screens/Rooster Khitan Celebration.jpeg"
        },
        {
            "nama": "Royal Blue Gold Anniversary",
            "kategori": "",
            "gambar": "_screens/Royal Blue Gold Anniversary.jpeg"
        },
        {
            "nama": "Royal Gunungan",
            "kategori": "",
            "gambar": "_screens/Royal Gunungan.jpeg"
        },
        {
            "nama": "Royal Red Wedding",
            "kategori": "",
            "gambar": "_screens/Royal Red Wedding.jpeg"
        },
        {
            "nama": "Rustic Brick Arch Birthday",
            "kategori": "",
            "gambar": "_screens/Rustic Brick Arch Birthday.jpeg"
        },
        {
            "nama": "Rustic Charm",
            "kategori": "",
            "gambar": "_screens/Rustic Charm.jpeg"
        },
        {
            "nama": "Rustic Floral Frame",
            "kategori": "",
            "gambar": "_screens/Rustic Floral Frame.jpeg"
        },
        {
            "nama": "Rustic Greenery",
            "kategori": "",
            "gambar": "_screens/Rustic Greenery.jpeg"
        },
        {
            "nama": "Safari Couple",
            "kategori": "",
            "gambar": "_screens/Safari Couple.jpeg"
        },
        {
            "nama": "Sage Green Wayang",
            "kategori": "",
            "gambar": "_screens/Sage Green Wayang.jpeg"
        },
        {
            "nama": "Sakura Dream",
            "kategori": "",
            "gambar": "_screens/Sakura Dream.jpeg"
        },
        {
            "nama": "Salman Space Aqiqah",
            "kategori": "",
            "gambar": "_screens/Salman Space Aqiqah.jpeg"
        },
        {
            "nama": "Sasak Heritage",
            "kategori": "",
            "gambar": "_screens/Sasak Heritage.jpeg"
        },
        {
            "nama": "Scarlet Heritage",
            "kategori": "",
            "gambar": "_screens/Scarlet Heritage.jpeg"
        },
        {
            "nama": "School Reunion Sky",
            "kategori": "",
            "gambar": "_screens/School Reunion Sky.jpeg"
        },
        {
            "nama": "Serene Monogram",
            "kategori": "",
            "gambar": "_screens/Serene Monogram.jpeg"
        },
        {
            "nama": "Silver Liquid Wedding",
            "kategori": "",
            "gambar": "_screens/Silver Liquid Wedding.jpeg"
        },
        {
            "nama": "Simple Couple Photo Wedding",
            "kategori": "",
            "gambar": "_screens/Simple Couple Photo Wedding.jpeg"
        },
        {
            "nama": "Simple Elegance",
            "kategori": "",
            "gambar": "_screens/Simple Elegance.jpeg"
        },
        {
            "nama": "Simple Gardenia",
            "kategori": "",
            "gambar": "_screens/Simple Gardenia.jpeg"
        },
        {
            "nama": "Simple Love",
            "kategori": "",
            "gambar": "_screens/Simple Love.jpeg"
        },
        {
            "nama": "Simple Red Floral Border",
            "kategori": "",
            "gambar": "_screens/Simple Red Floral Border.jpeg"
        },
        {
            "nama": "Skibidi Birthday",
            "kategori": "",
            "gambar": "_screens/Skibidi Birthday.jpeg"
        },
        {
            "nama": "Sleek Car Announcement",
            "kategori": "",
            "gambar": "_screens/Sleek Car Announcement.jpeg"
        },
        {
            "nama": "Sleeping Baby Aqiqah",
            "kategori": "",
            "gambar": "_screens/Sleeping Baby Aqiqah.jpeg"
        },
        {
            "nama": "Soft Floral Oval Frame",
            "kategori": "",
            "gambar": "_screens/Soft Floral Oval Frame.jpeg"
        },
        {
            "nama": "Soft Green Leafy Aqiqah",
            "kategori": "",
            "gambar": "_screens/Soft Green Leafy Aqiqah.jpeg"
        },
        {
            "nama": "Soft Green Watercolor Wedding",
            "kategori": "",
            "gambar": "_screens/Soft Green Watercolor Wedding.jpeg"
        },
        {
            "nama": "Soft Overlay",
            "kategori": "",
            "gambar": "_screens/Soft Overlay.jpeg"
        },
        {
            "nama": "Soft Peach Minimalist",
            "kategori": "",
            "gambar": "_screens/Soft Peach Minimalist.jpeg"
        },
        {
            "nama": "Soft Petal",
            "kategori": "",
            "gambar": "_screens/Soft Petal.jpeg"
        },
        {
            "nama": "Solemn Teal Tahlilan",
            "kategori": "",
            "gambar": "_screens/Solemn Teal Tahlilan.jpeg"
        },
        {
            "nama": "Spiderverse Birthday",
            "kategori": "",
            "gambar": "_screens/Spiderverse Birthday.jpeg"
        },
        {
            "nama": "Squadron Reunion",
            "kategori": "",
            "gambar": "_screens/Squadron Reunion.jpeg"
        },
        {
            "nama": "Starlight Prestige",
            "kategori": "",
            "gambar": "_screens/Starlight Prestige.jpeg"
        },
        {
            "nama": "Starry Night Guest",
            "kategori": "",
            "gambar": "_screens/Starry Night Guest.jpeg"
        },
        {
            "nama": "Studio Photo Wedding",
            "kategori": "",
            "gambar": "_screens/Studio Photo Wedding.jpeg"
        },
        {
            "nama": "Summer Beach",
            "kategori": "",
            "gambar": "_screens/Summer Beach.jpeg"
        },
        {
            "nama": "Summer Splash",
            "kategori": "",
            "gambar": "_screens/Summer Splash.jpeg"
        },
        {
            "nama": "Sunda Siger",
            "kategori": "",
            "gambar": "_screens/Sunda Siger.jpeg"
        },
        {
            "nama": "Sundanese Traditional Wedding",
            "kategori": "",
            "gambar": "_screens/Sundanese Traditional Wedding.jpeg"
        },
        {
            "nama": "Sunflower Photo Wedding",
            "kategori": "",
            "gambar": "_screens/Sunflower Photo Wedding.jpeg"
        },
        {
            "nama": "Sunset Temple",
            "kategori": "",
            "gambar": "_screens/Sunset Temple.jpeg"
        },
        {
            "nama": "Super Wings Birthday",
            "kategori": "",
            "gambar": "_screens/Super Wings Birthday.jpeg"
        },
        {
            "nama": "Superhero Blast",
            "kategori": "",
            "gambar": "_screens/Superhero Blast.jpeg"
        },
        {
            "nama": "Teal Garden Arch",
            "kategori": "",
            "gambar": "_screens/Teal Garden Arch.jpeg"
        },
        {
            "nama": "Teal Gold Ramadan",
            "kategori": "",
            "gambar": "_screens/Teal Gold Ramadan.jpeg"
        },
        {
            "nama": "Teal Pink Floral Aqiqah",
            "kategori": "",
            "gambar": "_screens/Teal Pink Floral Aqiqah.jpeg"
        },
        {
            "nama": "Teal Texture Monogram",
            "kategori": "",
            "gambar": "_screens/Teal Texture Monogram.jpeg"
        },
        {
            "nama": "Teal Watercolor Aqiqah",
            "kategori": "",
            "gambar": "_screens/Teal Watercolor Aqiqah.jpeg"
        },
        {
            "nama": "Tech Product Launch",
            "kategori": "",
            "gambar": "_screens/Tech Product Launch.jpeg"
        },
        {
            "nama": "Temple Silhouette Wedding",
            "kategori": "",
            "gambar": "_screens/Temple Silhouette Wedding.jpeg"
        },
        {
            "nama": "Terracotta Arch Wedding",
            "kategori": "",
            "gambar": "_screens/Terracotta Arch Wedding.jpeg"
        },
        {
            "nama": "Traditional Outdoor Wedding",
            "kategori": "",
            "gambar": "_screens/Traditional Outdoor Wedding.jpeg"
        },
        {
            "nama": "Traditional Siraman",
            "kategori": "",
            "gambar": "_screens/Traditional Siraman.jpeg"
        },
        {
            "nama": "Travel Passport Wedding",
            "kategori": "",
            "gambar": "_screens/Travel Passport Wedding.jpeg"
        },
        {
            "nama": "Tropical Leaves",
            "kategori": "",
            "gambar": "_screens/Tropical Leaves.jpeg"
        },
        {
            "nama": "Tropical Lime Inspiration",
            "kategori": "",
            "gambar": "_screens/Tropical Lime Inspiration.jpeg"
        },
        {
            "nama": "Tropical Monogram Wedding",
            "kategori": "",
            "gambar": "_screens/Tropical Monogram Wedding.jpeg"
        },
        {
            "nama": "Tropical Serenity",
            "kategori": "",
            "gambar": "_screens/Tropical Serenity.jpeg"
        },
        {
            "nama": "Umrah Journey Celebration",
            "kategori": "",
            "gambar": "_screens/Umrah Journey Celebration.jpeg"
        },
        {
            "nama": "Underwater Kingdom",
            "kategori": "",
            "gambar": "_screens/Underwater Kingdom.jpeg"
        },
        {
            "nama": "Underwater Sparkle Celebration",
            "kategori": "",
            "gambar": "_screens/Underwater Sparkle Celebration.jpeg"
        },
        {
            "nama": "Urban Crumpled Paper",
            "kategori": "",
            "gambar": "_screens/Urban Crumpled Paper.jpeg"
        },
        {
            "nama": "Valiant Commando",
            "kategori": "",
            "gambar": "_screens/Valiant Commando.jpeg"
        },
        {
            "nama": "Vibe Cultural 01",
            "kategori": "",
            "gambar": "_screens/Vibe Cultural 01.jpeg"
        },
        {
            "nama": "Vibe Cultural 02",
            "kategori": "",
            "gambar": "_screens/Vibe Cultural 02.jpeg"
        },
        {
            "nama": "Vibe Cultural 03",
            "kategori": "",
            "gambar": "_screens/Vibe Cultural 03.jpeg"
        },
        {
            "nama": "Vibrant Kids Pengajian",
            "kategori": "",
            "gambar": "_screens/Vibrant Kids Pengajian.jpeg"
        },
        {
            "nama": "Villa Photo Floral Frame",
            "kategori": "",
            "gambar": "_screens/Villa Photo Floral Frame.jpeg"
        },
        {
            "nama": "Vintage Floral Border",
            "kategori": "",
            "gambar": "_screens/Vintage Floral Border.jpeg"
        },
        {
            "nama": "Vintage Pillars",
            "kategori": "",
            "gambar": "_screens/Vintage Pillars.jpeg"
        },
        {
            "nama": "Walima Blossom",
            "kategori": "",
            "gambar": "_screens/Walima Blossom.jpeg"
        },
        {
            "nama": "Watercolor Border Wedding",
            "kategori": "",
            "gambar": "_screens/Watercolor Border Wedding.jpeg"
        },
        {
            "nama": "Watercolor Floral Birthday",
            "kategori": "",
            "gambar": "_screens/Watercolor Floral Birthday.jpeg"
        },
        {
            "nama": "Watercolor Splash",
            "kategori": "",
            "gambar": "_screens/Watercolor Splash.jpeg"
        },
        {
            "nama": "Wayang Blue",
            "kategori": "",
            "gambar": "_screens/Wayang Blue.jpeg"
        },
        {
            "nama": "Wayang Heritage",
            "kategori": "",
            "gambar": "_screens/Wayang Heritage.jpeg"
        },
        {
            "nama": "We Bare Bears Birthday",
            "kategori": "",
            "gambar": "_screens/We Bare Bears Birthday.jpeg"
        },
        {
            "nama": "Wellness Party",
            "kategori": "",
            "gambar": "_screens/Wellness Party.jpeg"
        },
        {
            "nama": "White Floral Photo Arch",
            "kategori": "",
            "gambar": "_screens/White Floral Photo Arch.jpeg"
        },
        {
            "nama": "White Gold Corp",
            "kategori": "",
            "gambar": "_screens/White Gold Corp.jpeg"
        },
        {
            "nama": "White Gold Marble",
            "kategori": "",
            "gambar": "_screens/White Gold Marble.jpeg"
        },
        {
            "nama": "White Gold Splatter",
            "kategori": "",
            "gambar": "_screens/White Gold Splatter.jpeg"
        },
        {
            "nama": "White Lace Texture Wedding",
            "kategori": "",
            "gambar": "_screens/White Lace Texture Wedding.jpeg"
        },
        {
            "nama": "White Marble Gold Leaf",
            "kategori": "",
            "gambar": "_screens/White Marble Gold Leaf.jpeg"
        },
        {
            "nama": "Wildflower Grove",
            "kategori": "",
            "gambar": "_screens/Wildflower Grove.jpeg"
        },
        {
            "nama": "Window Starlight",
            "kategori": "",
            "gambar": "_screens/Window Starlight.jpeg"
        },
        {
            "nama": "Winter Coast",
            "kategori": "",
            "gambar": "_screens/Winter Coast.jpeg"
        },
        {
            "nama": "Winter Robin",
            "kategori": "",
            "gambar": "_screens/Winter Robin.jpeg"
        },
        {
            "nama": "Wizarding Wax Seal",
            "kategori": "",
            "gambar": "_screens/Wizarding Wax Seal.jpeg"
        },
        {
            "nama": "Wizarding World",
            "kategori": "",
            "gambar": "_screens/Wizarding World.jpeg"
        },
        {
            "nama": "Yellow Playground Birthday",
            "kategori": "",
            "gambar": "_screens/Yellow Playground Birthday.jpeg"
        },
        {
            "nama": "Zayed Astronaut Tasyakuran",
            "kategori": "",
            "gambar": "_screens/Zayed Astronaut Tasyakuran.jpeg"
        }
    ];

    const gridContainer = $('#showcase-grid');
    const navContainer = $('.filter-nav');

    // Fungsi untuk membuat HTML satu kartu
    function createCard(item) {
        const name = item.nama;
        const imageName = item.gambar;
        const category = item.kategori;
        const fallbackImage = `https://placehold.co/600x400/1f2937/ffffff?text=${encodeURIComponent(name.replace(' ', '+'))}`;

        return `
                    <div class="p-4 card-wrapper">
                        <div class="card-item group rounded-xl overflow-hidden transition-all duration-300 transform hover:-translate-y-2 hover:shadow-2xl hover:shadow-indigo-500/20">
                            <a class="no-underline" href="#">
                                <div class="overflow-hidden">
                                    <img class="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-110" 
                                        src="${imageName}" 
                                        alt="${name}" 
                                        onerror="this.onerror=null;this.src='${fallbackImage}';" />
                                </div>
                                <div class="p-5 text-center">
                                    <h4 class="text-lg font-bold text-white mb-2 capitalize">${name}</h4>
                                    <div class="flex items-center justify-center gap-2">
                                        <div class="text-sm text-gray-400 font-medium">${category}</div>
                                    </div>
                                </div>
                            </a>
                        </div>
                    </div>
                `;
    }

    // Fungsi untuk me-render grid berdasarkan data yang diberikan
    function renderGrid(data) {
        gridContainer.fadeOut(200, function () {
            $(this).empty(); // Kosongkan grid setelah fade out

            if (data.length === 0) {
                $(this).html('<p class="w-full text-center text-gray-400">Tidak ada template yang cocok.</p>').fadeIn(200);
                return;
            }

            // Tentukan jumlah kolom
            const numColumns = window.innerWidth >= 768 ? 3 : 1; // 3 kolom untuk desktop, 1 untuk mobile
            const columnsData = Array.from({ length: numColumns }, () => []);

            // Distribusikan item ke kolom-kolom untuk efek masonry
            data.forEach((item, index) => {
                columnsData[index % numColumns].push(item);
            });

            columnsData.forEach(columnItems => {
                const columnDiv = $('<div class="w-full md:w-1/3"></div>');
                let columnHtml = '';
                columnItems.forEach(item => {
                    columnHtml += createCard(item);
                });
                columnDiv.html(columnHtml);
                $(this).append(columnDiv);
            });

            $(this).fadeIn(200);
        });
    }

    // Generate Filter Navigation
    const categories = new Set(templateData.map(item => item.kategori));
    let navLinks = '<a class="nav-link active text-sm font-semibold py-2 px-4 rounded-full transition-colors duration-300 cursor-pointer" href="#" data-filter="*">Semua</a>';
    const sortedCategories = Array.from(categories).filter(c => c).sort(); // Filter out empty categories

    sortedCategories.forEach(category => {
        navLinks += `<a class="nav-link text-sm font-semibold py-2 px-4 rounded-full hover:bg-gray-700 hover:text-white transition-colors duration-300 cursor-pointer" href="#" data-filter="${category}">${category}</a>`;
    });
    navContainer.html(navLinks);

    // Bind filter click event
    navContainer.on('click', 'a', function (event) {
        event.preventDefault();
        const filterValue = $(this).attr('data-filter');

        if ($(this).hasClass('active')) {
            return;
        }

        navContainer.find('a').removeClass('active');
        $(this).addClass('active');

        const filteredData = filterValue === '*'
            ? templateData
            : templateData.filter(item => item.kategori === filterValue);

        renderGrid(filteredData);
    });

    // Re-render the grid on window resize
    $(window).on('resize', function () {
        renderGrid(templateData);
    });

    // Initial Render
    renderGrid(templateData);
});