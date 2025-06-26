export const rents = [
    {
        id: 1,
        user_id: 3,
        book_id: 15,
        created_at: '2025-06-10T10:00:00Z',
        due_date: '2025-08-17T10:00:00Z',
        status: 'returned',
        returned_at: '2025-06-16T09:00:00Z',
        user: {
            id: 3,
            name: 'Andrés',
            lastname: 'Martínez',
            email: 'andres.martinez@example.com',
            telephone: '+34 699 123 456',
            address: 'Calle del Sol 12, Sevilla, España'
        },
        book: {
            id: 15,
            title: 'The Alchemist',
            author: 'Paulo Coelho',
            publicationYear: 1988,
            isbn10: '0061122416',
            isbn13: '9780061122415',
            coverImage: 'https://upload.wikimedia.org/wikipedia/en/c/c4/The_Alchemist_-_Paulo_Coelho_-_book_cover.jpg',
            synopsis: "A shepherd's journey to fulfill his personal legend and find treasure.",
            reviews: "An inspiring tale about following dreams and listening to your heart.",
            category: 'Adventure, Philosophy',
            language: 'Portuguese',
            description: 'Explores spirituality and self-discovery in a simple, poetic style.'
        }
    },
    {
        id: 2,
        user_id: 1,
        book_id: 7,
        created_at: '2025-06-11T14:30:00Z',
        due_date: '2025-09-18T14:30:00Z',
        status: 'pending',
        returned_at: null,
        user: {
            id: 1,
            name: 'Carlos',
            lastname: 'Ramírez',
            email: 'carlos.ramirez@example.com',
            telephone: '+34 612 345 678',
            address: 'Calle Mayor 123, Madrid, España'
        },
        book: {
            id: 7,
            title: 'War and Peace',
            author: 'Leo Tolstoy',
            publicationYear: 1869,
            isbn10: '0199232768',
            isbn13: '9780199232765',
            coverImage: 'https://images-na.ssl-images-amazon.com/images/I/81bRj2h+vKL.jpg',
            synopsis: 'An epic novel about the French invasion of Russia and its impact on society.',
            reviews: 'Considered one of the greatest novels ever written.',
            category: 'Historical Fiction',
            language: 'Russian',
            description: 'Explores war, peace, and human nature.'
        }
    },
    {
        id: 3,
        user_id: 9,
        book_id: 4,
        created_at: '2025-06-12T09:00:00Z',
        due_date: '2025-06-19T09:00:00Z',
        status: 'late',
        returned_at: null,
        user: {
            id: 9,
            name: 'Miguel',
            lastname: 'Santos',
            email: 'miguel.santos@example.com',
            telephone: '+34 611 789 456',
            address: 'Av. Constitución 99, Valladolid, España'
        },
        book: {
            id: 4,
            title: 'The Great Gatsby',
            author: 'F. Scott Fitzgerald',
            publicationYear: 1925,
            isbn10: '0743273567',
            isbn13: '9780743273565',
            coverImage: 'https://images-na.ssl-images-amazon.com/images/I/81af+MCATTL.jpg',
            synopsis: 'A story about the American Dream and the decadence of the Jazz Age.',
            reviews: 'A timeless exploration of ambition, love, and tragedy.',
            category: 'Classic, Fiction',
            language: 'English',
            description: 'Focuses on themes of wealth, love, and illusion.'
        }
    },
    {
        id: 4,
        user_id: 6,
        book_id: 21,
        created_at: '2025-06-14T08:15:00Z',
        due_date: '2025-06-28T08:15:00Z',
        status: 'returned',
        returned_at: '2025-10-20T07:50:00Z',
        user: {
            id: 6,
            name: 'Ana',
            lastname: 'López',
            email: 'ana.lopez@example.com',
            telephone: '+34 677 234 567',
            address: 'Paseo del Prado 32, Madrid, España'
        },
        book: {
            id: 21,
            title: 'Meditations',
            author: 'Marcus Aurelius',
            publicationYear: 180,
            isbn10: '048629823X',
            isbn13: '9780486298238',
            coverImage: 'https://upload.wikimedia.org/wikipedia/commons/e/e0/Meditations_Marcus_Aurelius_Cover.jpg',
            synopsis: 'Personal writings by the Roman emperor on Stoic philosophy.',
            reviews: 'A timeless guide to self-improvement and resilience.',
            category: 'Philosophy',
            language: 'Latin',
            description: 'Reflects on virtue, reason, and the art of living.'
        }
    },
    {
        id: 5,
        user_id: 2,
        book_id: 12,
        created_at: '2025-06-15T13:45:00Z',
        due_date: '2025-06-22T13:45:00Z',
        status: 'pending',
        returned_at: null,
        user: {
            id: 2,
            name: 'Lucía',
            lastname: 'Gómez',
            email: 'lucia.gomez@example.com',
            telephone: '+34 645 234 567',
            address: 'Av. Diagonal 456, Barcelona, España'
        },
        book: {
            id: 12,
            title: 'Fahrenheit 451',
            author: 'Ray Bradbury',
            publicationYear: 1953,
            isbn10: '1451673310',
            isbn13: '9781451673319',
            coverImage: 'https://upload.wikimedia.org/wikipedia/en/d/db/Fahrenheit_451_1st_ed_cover.jpg',
            synopsis: "A future where books are banned and 'firemen' burn any that are found.",
            reviews: 'A powerful warning against censorship and the suppression of ideas.',
            category: 'Dystopian, Science Fiction',
            language: 'English',
            description: 'Focuses on the struggle for knowledge and individual freedom.'
        }
    },
    {
        id: 6,
        user_id: 11,
        book_id: 3,
        created_at: '2025-06-16T11:00:00Z',
        due_date: '2025-06-23T11:00:00Z',
        status: 'pending',
        returned_at: null,
        user: {
            id: 11,
            name: 'Sergio',
            lastname: 'Navarro',
            email: 'sergio.navarro@example.com',
            telephone: '+34 699 456 321',
            address: 'Av. Andalucía 60, Cádiz, España'
        },
        book: {
            id: 3,
            title: 'Pride and Prejudice',
            author: 'Jane Austen',
            publicationYear: 1813,
            isbn10: '0141439513',
            isbn13: '9780141439518',
            coverImage: 'https://images-na.ssl-images-amazon.com/images/I/81OthjkJBuL.jpg',
            synopsis: 'A classic novel about love, social standing, and misunderstandings in 19th-century England.',
            reviews: 'One of the most beloved romantic novels ever written.',
            category: 'Romance, Classic',
            language: 'English',
            description: 'Explores themes of class, marriage, and morality.'
        }
    },
    {
        id: 7,
        user_id: 5,
        book_id: 9,
        created_at: '2025-06-17T10:30:00Z',
        due_date: '2025-06-24T10:30:00Z',
        status: 'returned',
        returned_at: '2025-06-22T10:00:00Z',
        user: {
            id: 5,
            name: 'Javier',
            lastname: 'Pérez',
            email: 'javier.perez@example.com',
            telephone: '+34 622 456 789',
            address: 'Calle Real 78, Zaragoza, España'
        },
        book: {
            id: 9,
            title: 'The Brothers Karamazov',
            author: 'Fyodor Dostoevsky',
            publicationYear: 1880,
            isbn10: '0374528373',
            isbn13: '9780374528379',
            coverImage: 'https://upload.wikimedia.org/wikipedia/commons/9/95/The_Brothers_Karamazov_1st_ed_cover.jpg',
            synopsis: 'A philosophical novel exploring faith, doubt, and morality through the story of three brothers.',
            reviews: 'One of Dostoevsky\'s greatest achievements.',
            category: 'Philosophical Fiction',
            language: 'Russian',
            description: 'Addresses deep questions about God, free will, and human nature.'
        }
    },
    {
        id: 8,
        user_id: 8,
        book_id: 2,
        created_at: '2025-06-17T13:15:00Z',
        due_date: '2025-06-24T13:15:00Z',
        status: 'pending',
        returned_at: null,
        user: {
            id: 8,
            name: 'Isabel',
            lastname: 'Morales',
            email: 'isabel.morales@example.com',
            telephone: '+34 688 234 567',
            address: 'Av. Libertad 101, Logroño, España'
        },
        book: {
            id: 2,
            title: 'To Kill a Mockingbird',
            author: 'Harper Lee',
            publicationYear: 1960,
            isbn10: '0061120081',
            isbn13: '9780061120084',
            coverImage: 'https://upload.wikimedia.org/wikipedia/en/7/79/To_Kill_a_Mockingbird.JPG',
            synopsis: 'A young girl comes of age in the racially charged American South.',
            reviews: 'A timeless novel of morality and justice.',
            category: 'Classic, Coming-of-age',
            language: 'English',
            description: 'Explores themes of racial injustice and moral growth.'
        }
    },
    {
        id: 9,
        user_id: 4,
        book_id: 18,
        created_at: '2025-06-18T11:45:00Z',
        due_date: '2025-06-25T11:45:00Z',
        status: 'returned',
        returned_at: '2025-06-23T10:00:00Z',
        user: {
            id: 4,
            name: 'Elena',
            lastname: 'Torres',
            email: 'elena.torres@example.com',
            telephone: '+34 633 111 222',
            address: 'Calle Luna 22, Granada, España'
        },
        book: {
            id: 18,
            title: 'The Stranger',
            author: 'Albert Camus',
            publicationYear: 1942,
            isbn10: '0679720200',
            isbn13: '9780679720201',
            coverImage: 'https://upload.wikimedia.org/wikipedia/en/f/f7/LStranger.jpg',
            synopsis: 'A man confronts the absurdity of life and death.',
            reviews: 'A cornerstone of existentialist literature.',
            category: 'Philosophical, Absurdist',
            language: 'French',
            description: 'Explores themes of indifference, fate, and existentialism.'
        }
    },
    {
        id: 10,
        user_id: 10,
        book_id: 5,
        created_at: '2025-06-18T15:00:00Z',
        due_date: '2025-06-25T15:00:00Z',
        status: 'late',
        returned_at: null,
        user: {
            id: 10,
            name: 'Sofía',
            lastname: 'Herrera',
            email: 'sofia.herrera@example.com',
            telephone: '+34 600 999 888',
            address: 'Calle del Río 8, Murcia, España'
        },
        book: {
            id: 5,
            title: '1984',
            author: 'George Orwell',
            publicationYear: 1949,
            isbn10: '0451524934',
            isbn13: '9780451524935',
            coverImage: 'https://upload.wikimedia.org/wikipedia/en/c/c3/1984first.jpg',
            synopsis: 'A dystopian novel about surveillance and totalitarianism.',
            reviews: 'A chilling warning about government overreach.',
            category: 'Dystopian, Political Fiction',
            language: 'English',
            description: 'Explores the dangers of totalitarian control and loss of individuality.'
        }
    },
    {
        id: 11,
        user_id: 7,
        book_id: 14,
        created_at: '2025-06-19T08:30:00Z',
        due_date: '2025-06-26T08:30:00Z',
        status: 'pending',
        returned_at: null,
        user: {
            id: 7,
            name: 'Laura',
            lastname: 'Vega',
            email: 'laura.vega@example.com',
            telephone: '+34 655 987 321',
            address: 'Calle Jardín 55, Málaga, España'
        },
        book: {
            id: 14,
            title: 'Siddhartha',
            author: 'Hermann Hesse',
            publicationYear: 1922,
            isbn10: '0553208845',
            isbn13: '9780553208849',
            coverImage: 'https://upload.wikimedia.org/wikipedia/en/4/4e/Siddhartha_Hermann_Hesse.jpg',
            synopsis: 'A man seeks spiritual enlightenment in ancient India.',
            reviews: 'A beautifully written spiritual journey.',
            category: 'Spiritual, Philosophical',
            language: 'German',
            description: 'Explores self-discovery, enlightenment, and inner peace.'
        }
    },
    {
        id: 12,
        user_id: 12,
        book_id: 17,
        created_at: '2025-06-20T12:00:00Z',
        due_date: '2025-06-27T12:00:00Z',
        status: 'returned',
        returned_at: '2025-06-25T09:00:00Z',
        user: {
            id: 12,
            name: 'Tomás',
            lastname: 'Ibáñez',
            email: 'tomas.ibanez@example.com',
            telephone: '+34 622 123 999',
            address: 'Av. de la Paz 88, León, España'
        },
        book: {
            id: 17,
            title: 'Brave New World',
            author: 'Aldous Huxley',
            publicationYear: 1932,
            isbn10: '0060850523',
            isbn13: '9780060850524',
            coverImage: 'https://upload.wikimedia.org/wikipedia/en/6/62/BraveNewWorld_FirstEdition.jpg',
            synopsis: 'A futuristic society built on pleasure, control, and conditioning.',
            reviews: 'A provocative look at a technologically controlled world.',
            category: 'Dystopian, Science Fiction',
            language: 'English',
            description: 'Examines the cost of a superficially perfect society.'
        }
    },
    {
        id: 13,
        user_id: 13,
        book_id: 8,
        created_at: '2025-06-21T14:00:00Z',
        due_date: '2025-06-28T14:00:00Z',
        status: 'pending',
        returned_at: null,
        user: {
            id: 13,
            name: 'Manuel',
            lastname: 'Reyes',
            email: 'manuel.reyes@example.com',
            telephone: '+34 677 123 321',
            address: 'Calle del Bosque 23, Toledo, España'
        },
        book: {
            id: 8,
            title: 'Don Quixote',
            author: 'Miguel de Cervantes',
            publicationYear: 1605,
            isbn10: '0060934344',
            isbn13: '9780060934347',
            coverImage: 'https://upload.wikimedia.org/wikipedia/commons/6/6f/Don_Quixote_1st_ed_cover.jpg',
            synopsis: 'A knight sets out on misguided adventures in the name of chivalry.',
            reviews: 'A masterful satire of romantic idealism.',
            category: 'Classic, Satire',
            language: 'Spanish',
            description: 'Explores illusion, madness, and the power of literature.'
        }
    },
    {
        id: 14,
        user_id: 14,
        book_id: 10,
        created_at: '2025-06-21T16:30:00Z',
        due_date: '2025-06-28T16:30:00Z',
        status: 'returned',
        returned_at: '2025-06-26T14:00:00Z',
        user: {
            id: 14,
            name: 'Natalia',
            lastname: 'Campos',
            email: 'natalia.campos@example.com',
            telephone: '+34 699 111 000',
            address: 'Av. de la Ciencia 44, Salamanca, España'
        },
        book: {
            id: 10,
            title: 'The Trial',
            author: 'Franz Kafka',
            publicationYear: 1925,
            isbn10: '0805209999',
            isbn13: '9780805209990',
            coverImage: 'https://upload.wikimedia.org/wikipedia/en/9/9f/The_Trial_first_edition.jpg',
            synopsis: 'A man is arrested and prosecuted by a mysterious authority.',
            reviews: 'A powerful allegory of bureaucracy and alienation.',
            category: 'Existential, Fiction',
            language: 'German',
            description: 'Explores themes of guilt, powerlessness, and absurdity.'
        }
    },
    {
        id: 15,
        user_id: 15,
        book_id: 6,
        created_at: '2025-06-22T11:00:00Z',
        due_date: '2025-06-29T11:00:00Z',
        status: 'pending',
        returned_at: null,
        user: {
            id: 15,
            name: 'Patricia',
            lastname: 'Delgado',
            email: 'patricia.delgado@example.com',
            telephone: '+34 688 123 456',
            address: 'Plaza Mayor 3, Cuenca, España'
        },
        book: {
            id: 6,
            title: 'The Catcher in the Rye',
            author: 'J.D. Salinger',
            publicationYear: 1951,
            isbn10: '0316769487',
            isbn13: '9780316769488',
            coverImage: 'https://upload.wikimedia.org/wikipedia/en/3/32/Rye_catcher.jpg',
            synopsis: 'A teenager narrates a few days of his life filled with angst and alienation.',
            reviews: 'A classic voice of teenage rebellion.',
            category: 'Coming-of-age, Fiction',
            language: 'English',
            description: 'Captures adolescent confusion and disillusionment.'
        }
    },
    {
        id: 16,
        user_id: 16,
        book_id: 16,
        created_at: '2025-06-23T08:00:00Z',
        due_date: '2025-06-30T08:00:00Z',
        status: 'pending',
        returned_at: null,
        user: {
            id: 16,
            name: 'Raúl',
            lastname: 'Cabrera',
            email: 'raul.cabrera@example.com',
            telephone: '+34 644 321 000',
            address: 'Calle Nueva 12, Cáceres, España'
        },
        book: {
            id: 16,
            title: 'One Hundred Years of Solitude',
            author: 'Gabriel García Márquez',
            publicationYear: 1967,
            isbn10: '0060883286',
            isbn13: '9780060883287',
            coverImage: 'https://upload.wikimedia.org/wikipedia/en/6/64/Cien_años_de_soledad_%28book_cover%29.jpg',
            synopsis: 'The rise and fall of the Buendía family in the fictional town of Macondo.',
            reviews: 'A monumental work of magical realism.',
            category: 'Magical Realism, Fiction',
            language: 'Spanish',
            description: 'Explores history, family, time, and destiny through a surreal lens.'
        }
    },
    {
        id: 17,
        user_id: 17,
        book_id: 11,
        created_at: '2025-06-24T09:15:00Z',
        due_date: '2025-07-01T09:15:00Z',
        status: 'pending',
        returned_at: null,
        user: {
            id: 17,
            name: 'Verónica',
            lastname: 'Luna',
            email: 'veronica.luna@example.com',
            telephone: '+34 655 456 777',
            address: 'Av. del Sol 77, Huelva, España'
        },
        book: {
            id: 11,
            title: 'Crime and Punishment',
            author: 'Fyodor Dostoevsky',
            publicationYear: 1866,
            isbn10: '0140449132',
            isbn13: '9780140449136',
            coverImage: 'https://upload.wikimedia.org/wikipedia/commons/4/4b/Crimeandpunishmentcover.png',
            synopsis: 'A man commits murder and wrestles with guilt and redemption.',
            reviews: 'A profound psychological and philosophical novel.',
            category: 'Psychological Fiction, Classic',
            language: 'Russian',
            description: 'Explores morality, justice, and the human psyche.'
        }
    }
];
