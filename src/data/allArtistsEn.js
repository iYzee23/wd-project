const allArtistsEn = [
    {
        artist_id: 1,
        artist_name: 'Vincent Van Gogh',
        artist_short_biography: 'The most famous Dutch painter of the 19th century.',
        artist_biography: 'Vincent Willem van Gogh (Dutch: Vincent Willem van Gogh; Zundert, March 30, 1853 – Auvers-sur-Oise, July 29, 1890) was a painter of Dutch origin. He is one of the three greatest painters of Post-Impressionism and one of the most revered painters in general. Van Gogh was the son of a Protestant minister, and he himself was a preacher for a time. His works are notable for their raw beauty, emotional honesty, and bold colors, which made him one of the leading artists of the 19th century. After a long and painful struggle with anxiety and frequent episodes of mental illness, he died at the age of 37 from a gunshot wound. It is widely believed that he died by suicide, although the gun from which he was shot was never found. During his lifetime, his work was known to only a few individuals, and only a handful appreciated and respected it.',
        artist_wiki: 'https://en.wikipedia.org/wiki/Vincent_van_Gogh'
    },
    {
        artist_id: 2,
        artist_name: 'Claude Monet',
        artist_short_biography: 'The renowned French painter and the founder of Impressionism.',
        artist_biography: 'Claude Monet (French: Claude Monet; November 14, 1840 – December 5, 1926) was an Impressionist painter. Impressionism was named after his painting "Impression, Sunrise" in 1874.',
        artist_wiki: 'https://en.wikipedia.org/wiki/Claude_Monet'
    },
    {
        artist_id: 3,
        artist_name: 'Salvador Dalí',
        artist_short_biography: 'The renowned Spanish artist and the creator of Surrealism.',
        artist_biography: 'Salvador Felipe Jacinto Dalí, 1st Marquis of Púbol (Catalan: Salvador Felip Jacint Dalí Domènech, Spanish: Salvador Felipe Jacinto Dalí Domènech; May 11, 1904 – January 23, 1989) was a Catalan and Spanish surrealist artist, one of the most significant artists of the 20th century. He was involved in painting, writing, sculpture, set design, and acting.\n\nHe is considered one of the greatest artists of the 20th century, often referred to as a master of Surrealism. His artistic works demonstrated his exceptional creativity, making him one of the most innovative painters of his time. Dalí frequently explored themes of space, dreams, hallucinations, and religion.\nThroughout his life, this famous painter believed in his uniqueness. While some regarded him as a genius, others saw him as a disturbed egotist whose works held no value. Despite Spanish art critics considering him an arrogant and untalented charlatan, his popularity and the value of his artworks continued to rise. Today, global collectors pay millions of dollars to include at least one of Dalí\'s paintings in their collections.',
        artist_wiki: 'https://en.wikipedia.org/wiki/Salvador_Dal%C3%AD'
    },
    {
        artist_id: 4,
        artist_name: 'Pablo Picasso',
        artist_short_biography: 'The most influential Spanish painter of the 20th century.',
        artist_biography: 'Pablo Ruiz Picasso (Spanish: Pablo Ruiz Picasso, Málaga, October 25, 1881 – Mougins, April 8, 1973) was a versatile Spanish artist. Picasso was one of the leading and most renowned painters, sculptors, draughtsmen, and printmakers of the 20th century, spending the majority of his career living and working in France. He was a dominant figure in the visual arts of the first half of the 20th century and initiated groundbreaking changes in modern art. Although his body of work is often divided into distinct periods, these divisions are somewhat arbitrary as his creative energy and imagination were such that he often simultaneously worked on a rich repertoire of subjects and in different styles. Picasso himself explained it as follows: "The different styles I have been using in my art must not be seen as an evolution, or as steps towards an unknown ideal of painting. When I have something to say, I say it in the manner in which I believe it needs to be said. I do not consider the so-called different elements which I have used in different times of my painting as an evolution of one style into a new and different style. If the subjects I have wanted to express have suggested different ways of expression, I have never hesitated to adopt them." Alongside Georges Braque, he is regarded as one of the founders of the Cubist art movement.',
        artist_wiki: 'https://en.wikipedia.org/wiki/Pablo_Picasso'
    },
    {
        artist_id: 5,
        artist_name: 'Michelangelo Buonarroti',
        artist_short_biography: 'Italian sculptor, painter, and architect of the Renaissance era.',
        artist_biography: 'Michelangelo di Lodovico di Leonardo di Buonarroti Simoni (Italian: Michelangelo di Lodovico di Leonardo di Buonarroti Simoni; March 6, 1475 – February 18, 1564), commonly known as Michelangelo, was an Italian sculptor, painter, and architect of the Renaissance period. He is considered one of the greatest artists in the history of Western art. His most famous works include sculptures such as David and Pietà, frescoes in the Sistine Chapel, and architectural projects such as the Basilica of Saint Peter in Rome. Michelangelo\'s art is characterized by its power and emotional intensity, leaving a profound impact on art and culture.',
        artist_wiki: 'https://en.wikipedia.org/wiki/Michelangelo'
    },
    {
        artist_id: 6,
        artist_name: 'Auguste Rodin',
        artist_short_biography: 'French sculptor, one of the most famous representatives of modernist sculpture.',
        artist_biography: 'François-Auguste-René Rodin (French: François-Auguste-René Rodin; November 12, 1840 – November 17, 1917) was a French sculptor, one of the most renowned representatives of modernist sculpture. His works were characterized by an innovative approach to form, emotional expression, and natural realism. Rodin created some of the most famous sculptures, including "The Thinker" (Le Penseur) and "The Kiss" (Le Baiser). His art had a significant influence on contemporary sculpture and sculpture in general.',
        artist_wiki: 'https://en.wikipedia.org/wiki/Auguste_Rodin'
    },
    {
        artist_id: 7,
        artist_name: 'Donatello',
        artist_short_biography: 'Italian Renaissance sculptor and one of the pioneers of modern sculpture.',
        artist_biography: 'Donatello (1386 - 1466) was an Italian Renaissance sculptor and one of the pioneers of modern sculpture. His artworks stood out for their innovative approach, experimentation with materials, and realistic detailing. Donatello was highly influential in the development of Renaissance sculpture with his revolutionary style and techniques. His works, such as "David" and "Saint George," represent the pinnacle of his creativity. Donatello was known for his talent in shaping marble and casting bronze. His work has left an indelible mark in art history, and his legacy continues to be admired today.',
        artist_wiki: 'https://en.wikipedia.org/wiki/Donatello'
    },
    {
        artist_id: 8,
        artist_name: 'Gian Lorenzo Bernini',
        artist_short_biography: 'Italian Baroque sculptor, architect, and painter.',
        artist_biography: 'Gian Lorenzo Bernini (1598 - 1680) was a prominent Italian Baroque sculptor, architect, and painter. He is considered one of the greatest masters of Baroque art. His works encompassed a wide range of styles and techniques, and he is known for his expressive and emotional portrayal of human figures. Bernini was a key figure in shaping Baroque architecture in Rome, and his monumental sculptural works, such as "Apollo and Daphne," "The Ecstasy of Saint Teresa," and "David," are considered the highlights of his career. His art reflected drama, movement, and intensity, and his influence on the world of sculpture remains indelible.',
        artist_wiki: 'https://en.wikipedia.org/wiki/Gian_Lorenzo_Bernini'
    },
    {
        artist_id: 9,
        artist_name: 'Coco Chanel',
        artist_short_biography: 'French fashion designer and founder of the Chanel brand.',
        artist_biography: 'Coco Chanel (1883 - 1971) was a French fashion designer and founder of the Chanel brand. She is considered one of the most influential figures in the fashion world of the 20th century. Chanel revolutionized the fashion industry with her innovative designs, including the popularization of the little black dress, Chanel No. 5 perfume, and the iconic Chanel suit with tweed fabric. Her style was characterized by simplicity, elegance, and functionality. Chanel had a significant impact on the fashion of her time and left a lasting imprint on the fashion industry. Her legacy and the Chanel brand continue to be symbols of luxury, sophistication, and timeless style.',
        artist_wiki: 'https://en.wikipedia.org/wiki/Coco_Chanel'
    },
    {
        artist_id: 10,
        artist_name: 'Giorgio Armani',
        artist_short_biography: 'Italian fashion designer and founder of the Armani brand.',
        artist_biography: 'Giorgio Armani (born 1934) is a renowned Italian fashion designer and founder of the Armani brand. Armani became known for his elegant and subtle style, which combines luxury and minimalism. His brand encompasses a wide range of clothing, from formal to casual wear, as well as fashion accessories, fragrances, and luxury interiors. Armani has become synonymous with sophisticated Italian design, and his creations are often seen on the red carpet and among celebrities. His influence on the fashion industry is enormous, and his brand Armani remains one of the most recognizable and esteemed fashion brands in the world.',
        artist_wiki: 'https://en.wikipedia.org/wiki/Giorgio_Armani'
    },
    {
        artist_id: 11,
        artist_name: 'Alexander McQueen',
        artist_short_biography: 'British fashion designer known for his innovative aesthetics.',
        artist_biography: 'Alexander McQueen (1969 - 2010) was a British fashion designer known for his innovative aesthetics and provocative approach to fashion. His designs were experimental, dramatic, and often controversial, challenging traditional ideas of beauty and form. McQueen was renowned for his passion for craftsmanship and technical virtuosity. His revolutionary fashion shows were spectacular events that blended fashion, performance, and art. McQueen\'s vision of fashion was highly influential and left a profound impact on the industry. Unfortunately, he passed away in 2010, but his legacy lives on through his iconic designs.',
        artist_wiki: 'https://en.wikipedia.org/wiki/Alexander_McQueen'
    },
    {
        artist_id: 12,
        artist_name: 'Yves Saint Laurent',
        artist_short_biography: 'French fashion designer who revolutionized the world of fashion.',
        artist_biography: 'Yves Saint Laurent (1936 - 2008) was a French fashion designer who revolutionized the world of fashion with his innovative approach and extraordinary design. He was known for his sophisticated, elegant, and progressive designs that combined masculine and feminine elements while remaining modern and wearable. Saint Laurent introduced iconic pieces such as "Le Smoking" (women\'s tuxedo), safari jackets, and trapeze dresses. Throughout his career, he established his own fashion house, Yves Saint Laurent, which became a symbol of luxury and elegance. His influence on the fashion industry and design is undeniable.',
        artist_wiki: 'https://en.wikipedia.org/wiki/Yves_Saint_Laurent_(designer)'
    }
];

export default allArtistsEn;