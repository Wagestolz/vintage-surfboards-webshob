DROP TABLE IF EXISTS subscribers; 
DROP TABLE IF EXISTS products;
-- DROP TABLE IF EXISTS users; 

-- CREATE TABLE users(
--     id SERIAL PRIMARY KEY,
--     first VARCHAR(255) NOT NULL,
--     last VARCHAR(255) NOT NULL,
--     email VARCHAR(255) NOT NULL UNIQUE,
--     password VARCHAR(255) NOT NULL,
--     profile_pic VARCHAR,
--     bio TEXT,
--     created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
-- );

CREATE TABLE subscribers(
    id SERIAL PRIMARY KEY,
    email VARCHAR(255) NOT NULL UNIQUE,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);


CREATE TABLE products (
	id SERIAL NOT NULL PRIMARY KEY,
	fields JSON NOT NULL
);


INSERT INTO products (fields)
VALUES('{
   "name":"Vic Tantau",
   "price":370000,
   "stock":3,
   "stars": 4.9,
   "reviews": 12,
   "image":"https://s3.amazonaws.com/aloha.vintage.surfboards/VICTANTAU1.jpg",
   "colors":[
      "#A47250",
      "#DAC8B2"
   ],
   "brand":"Vic Tantau",
   "description":"8`10 1957 Blasa Pig, Single Fin, Balsa Teak Stringer. Vic Tantau was the first shaper in Australia to use lighter weight materials. It was based on a lightweight malibu from a Californian lifesaver, who came out for the 1956 Olympic games.",
   "category":"1960s",
   "shipping":true,
   "featured":true,
   "tags":[
      "malibu",
      "single",
      "stringer"
   ],
   "images":[
      {
         "id":1,
         "url":"https://s3.amazonaws.com/aloha.vintage.surfboards/VICTANTAU1.jpg",
         "filename":"VICTANTAU1.jpg",
         "size":62864,
         "type":"image/jpg"
      },
      {
         "id":2,
         "url":"https://s3.amazonaws.com/aloha.vintage.surfboards/VICTANTAU2.jpg",
         "filename":"VICTANTAU2.jpg",
         "size":62864,
         "type":"image/jpg"
      },
      {
         "id":3,
         "url":"https://s3.amazonaws.com/aloha.vintage.surfboards/VICTANTAU3.jpg",
         "filename":"VICTANTAU3.jpg",
         "size":62864,
         "type":"image/jpg"
      },
      {
         "id":4,
         "url":"https://s3.amazonaws.com/aloha.vintage.surfboards/VICTANTAU4.jpg",
         "filename":"VICTANTAU4.jpg",
         "size":62864,
         "type":"image/jpg"
      },
      {
         "id":5,
         "url":"https://s3.amazonaws.com/aloha.vintage.surfboards/VICTANTAU5.jpg",
         "filename":"VICTANTAU5.jpg",
         "size":62864,
         "type":"image/jpg"
      }
   ]
}');

INSERT INTO products (fields)
VALUES('{
   "name":"Ron Desmond",
   "price":150000,
   "stock":2,
   "stars": 4.3,
   "reviews": 43,
   "image":"https://s3.amazonaws.com/aloha.vintage.surfboards/RONDESMOND1.jpg",
   "colors":[
      "#CF7819",
      "#DBC194",
      "#6D2A15"
   ],
   "brand":"Ron Desmond",
   "description":"9`9 Single Fin, Longboard. One of our oldest collector board - a late 60’s transition board.",
   "category":"1960s",
   "shipping":true,
   "featured":true,
   "tags":[
      "single",
      "longboard",
      "orange"
   ],
   "images":[
      {
         "id":6,
         "url":"https://s3.amazonaws.com/aloha.vintage.surfboards/RONDESMOND1.jpg",
         "filename":"RONDESMOND1.jpg",
         "size":62864,
         "type":"image/jpg"
      },
      {
         "id":7,
         "url":"https://s3.amazonaws.com/aloha.vintage.surfboards/RONDESMOND2.jpg",
         "filename":"RONDESMOND2.jpg",
         "size":62864,
         "type":"image/jpg"
      },
      {
         "id":8,
         "url":"https://s3.amazonaws.com/aloha.vintage.surfboards/RONDESMOND3.jpg",
         "filename":"RONDESMOND3.jpg",
         "size":62864,
         "type":"image/jpg"
      }
   ]
}');

INSERT INTO products (fields)
VALUES('{
   "name":"McCoy Larry Blair Model",
   "price":170000,
   "stock":1,
   "stars": 4.1,
   "reviews": 102,
   "image":"https://s3.amazonaws.com/aloha.vintage.surfboards/MCCOY1.jpg",
   "colors":[
      "#7EB3AF",
      "#017CC2",
      "#FEF7DB"
   ],
   "brand":"McCoy",
   "description":"Signed by Larry Blair who won two Pipes, back to back. That put him up there with Lopez and Russell. Larry was the first Aussie to win the Pipe Masters and to win it back to back and remains the youngest ever winner of the event.",
   "category":"1970s",
   "shipping":true,
   "featured":true,
   "tags":[
      "signature",
      "pipe",
      "single"
   ],
   "images":[
      {
         "id":9,
         "url":"https://s3.amazonaws.com/aloha.vintage.surfboards/MCCOY1.jpg",
         "filename":"MCCOY1.jpg",
         "size":62864,
         "type":"image/jp"
      },
      {
         "id":10,
         "url":"https://s3.amazonaws.com/aloha.vintage.surfboards/MCCOY2.jpg",
         "filename":"MCCOY2.jpg",
         "size":62864,
         "type":"image/jp"
      },
      {
         "id":11,
         "url":"https://s3.amazonaws.com/aloha.vintage.surfboards/MCCOY3.jpg",
         "filename":"MCCOY3.jpg",
         "size":62864,
         "type":"image/jp"
      },
      {
         "id":12,
         "url":"https://s3.amazonaws.com/aloha.vintage.surfboards/MCCOY4.jpg",
         "filename":"MCCOY4.jpg",
         "size":62864,
         "type":"image/jp"
      }
   ]
}');

INSERT INTO products (fields)
VALUES('{
   "name":"Shane Double Dominator",
   "price":250000,
   "stock":0,
   "stars": 4.9,
   "reviews": 23,
   "image":"https://s3.amazonaws.com/aloha.vintage.surfboards/SHANE1.jpg",
   "colors":[
      "#7EB3AF",
      "#017CC2",
      "#FEF7DB"
   ],
   "brand":"Designed by Inncy, Peter Thain",
   "description":"Very rare - possibly a one of a kind board. 6`4 and in pre-loved condition with quite a few dings. Shaped in 76.",
   "category":"1970s",
   "shipping":false,
   "featured":false,
   "tags":[
      "double",
      "pipe"
   ],
   "images":[
      {
         "id":13,
         "url":"https://s3.amazonaws.com/aloha.vintage.surfboards/SHANE1.jpg",
         "filename":"SHANE1.jpg",
         "size":62864,
         "type":"image/jpg"
      },
      {
         "id":14,
         "url":"https://s3.amazonaws.com/aloha.vintage.surfboards/SHANE2.jpg",
         "filename":"SHANE2.jpg",
         "size":62864,
         "type":"image/jpg"
      },
      {
         "id":15,
         "url":"https://s3.amazonaws.com/aloha.vintage.surfboards/SHANE3.jpg",
         "filename":"SHANE3.jpg",
         "size":62864,
         "type":"image/jpg"
      },
      {
         "id":16,
         "url":"https://s3.amazonaws.com/aloha.vintage.surfboards/SHANE4.jpg",
         "filename":"SHANE4.jpg",
         "size":62864,
         "type":"image/jpg"
      },
      {
         "id":17,
         "url":"https://s3.amazonaws.com/aloha.vintage.surfboards/SHANE5.jpg",
         "filename":"SHANE5.jpg",
         "size":62864,
         "type":"image/jpg"
      },
      {
         "id":18,
         "url":"https://s3.amazonaws.com/aloha.vintage.surfboards/SHANE6.jpg",
         "filename":"SHANE6.jpg",
         "size":62864,
         "type":"image/jpg"
      }
   ]
}');