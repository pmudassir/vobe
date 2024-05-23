import { Prisma, PrismaClient } from '@prisma/client';
import { DefaultArgs } from '@prisma/client/runtime/library';
const prisma = new PrismaClient();

type PrismTxn = Omit<
  PrismaClient<Prisma.PrismaClientOptions, never, DefaultArgs>,
  '$connect' | '$disconnect' | '$on' | '$transaction' | '$use' | '$extends'
>;

async function deleteAll() {
  await prisma.$transaction(async (tx) => {
    await tx.user.deleteMany();
    await tx.pub.deleteMany();
    await tx.feature.deleteMany();
  });
}

async function main() {
  await deleteAll();
  await prisma.$transaction(async (tx) => {
    await addUsers(tx);
    await addPubs(tx);
    await addFeatures(tx);
  });
}

async function addUsers(tx: PrismTxn) {
  await tx.user.createMany({
    data: [
      {
        id: '61e9ef7f4c46f34e2f02e956',
        email: 'john.doe@example.com',
        firstName: 'John',
        lastName: 'Doe',
        waitlisted: false,
        active: true,
        phone: '1234567890',
        points: 100,
        type: 'USER',
        lastLogin: new Date(),
      },
      {
        id: '61e9ef7f4c46f34e2f02e957',
        email: 'alice.smith@example.com',
        firstName: 'Alice',
        lastName: 'Smith',
        waitlisted: false,
        active: true,
        phone: '1987654321',
        points: 50,
        type: 'USER',
        lastLogin: new Date(),
      },
      {
        id: '61e9ef7f4c46f34e2f02e958',
        email: 'emily.jones@example.com',
        firstName: 'Emily',
        lastName: 'Jones',
        waitlisted: false,
        active: true,
        phone: '1122334455',
        points: 75,
        type: 'USER',
        lastLogin: new Date(),
      },
      {
        id: '61e9ef7f4c46f34e2f02e959',
        email: 'david.wilson@example.com',
        firstName: 'David',
        lastName: 'Wilson',
        waitlisted: false,
        active: true,
        phone: '1555555555',
        points: 120,
        type: 'USER',
        lastLogin: new Date(),
      },
      {
        id: '61e9ef7f4c46f34e2f02e95a',
        email: 'sarah.brown@example.com',
        firstName: 'Sarah',
        lastName: 'Brown',
        waitlisted: false,
        active: true,
        phone: '1666666666',
        points: 80,
        type: 'USER',
        lastLogin: new Date(),
      },
    ],
  });
}

async function addPubs(tx: PrismTxn) {
  await tx.pub.create({
    data: {
      id: '61e9ef7f4c46f34e2f02e95b',
      name: 'The Golden Lion',
      address: '123 Main Street',
      phone: '+1234567890',
      tags: 'pub, bar, restaurant',
      mapsLink: 'https://maps.example.com/golden-lion',
      about: 'A cozy pub serving delicious food and drinks.',
      profileImage:
        'https://images.pexels.com/photos/18326934/pexels-photo-18326934.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
      foodMenu: [
        'https://images.pexels.com/photos/313700/pexels-photo-313700.jpeg',
        'https://images.pexels.com/photos/128424/pexels-photo-128424.jpeg',
        'https://images.pexels.com/photos/831012/pexels-photo-831012.jpeg',
      ],
      barMenu: [
        'https://images.pexels.com/photos/612790/pexels-photo-612790.jpeg',
        'https://images.pexels.com/photos/2351274/pexels-photo-2351274.jpeg',
        'https://images.pexels.com/photos/143640/pexels-photo-143640.jpeg',
      ],
      openTime: '12:00 PM',
      closeTime: '11:00 PM',
      active: true,
      type: 'LUXE',
      timeSlots: [
        'TIME_6_00_PM',
        'TIME_6_30_PM',
        'TIME_7_00_PM',
        'TIME_7_30_PM',
        'TIME_8_00_PM',
        'TIME_8_30_PM',
        'TIME_9_00_PM',
        'TIME_9_30_PM',
        'TIME_10_00_PM',
        'TIME_10_30_PM',
        'TIME_11_00_PM',
      ],
      featureIds: [
        '61e9ef7f4c46f34e2f02e960',
        '61e9ef7f4c46f34e2f02e961',
        '61e9ef7f4c46f34e2f02e962',
        '61e9ef7f4c46f34e2f02e963',
      ],
    },
  });
  await tx.pub.create({
    data: {
      id: '61e9ef7f4c46f34e2f02e95c',
      name: 'The Red Dragon',
      address: '456 Oak Street',
      phone: '+1987654321',
      tags: 'pub, sports bar, live music',
      mapsLink: 'https://maps.example.com/red-dragon',
      profileImage:
        'https://images.pexels.com/photos/16092934/pexels-photo-16092934.jpeg',
      about:
        'A lively pub with a great selection of beers and live music performances.',
      foodMenu: [
        'https://images.pexels.com/photos/313700/pexels-photo-313700.jpeg',
        'https://images.pexels.com/photos/128424/pexels-photo-128424.jpeg',
        'https://images.pexels.com/photos/831012/pexels-photo-831012.jpeg',
      ],
      barMenu: [
        'https://images.pexels.com/photos/612790/pexels-photo-612790.jpeg',
        'https://images.pexels.com/photos/2351274/pexels-photo-2351274.jpeg',
        'https://images.pexels.com/photos/143640/pexels-photo-143640.jpeg',
      ],
      openTime: '11:00 AM',
      closeTime: '2:00 AM',
      active: true,
      type: 'LUXE',
      timeSlots: [
        'TIME_6_00_PM',
        'TIME_6_30_PM',
        'TIME_7_00_PM',
        'TIME_7_30_PM',
        'TIME_8_00_PM',
        'TIME_8_30_PM',
        'TIME_9_00_PM',
        'TIME_9_30_PM',
        'TIME_10_00_PM',
        'TIME_10_30_PM',
        'TIME_11_00_PM',
      ],
      featureIds: [
        '61e9ef7f4c46f34e2f02e960',
        '61e9ef7f4c46f34e2f02e961',
        '61e9ef7f4c46f34e2f02e962',
        '61e9ef7f4c46f34e2f02e963',
      ],
    },
  });
  await tx.pub.create({
    data: {
      id: '61e9ef7f4c46f34e2f02e95d',
      name: 'The Green Tavern',
      address: '789 Elm Street',
      profileImage:
        'https://images.pexels.com/photos/17849319/pexels-photo-17849319.jpeg',
      phone: '+1122334455',
      tags: 'pub, restaurant, outdoor seating',
      mapsLink: 'https://maps.example.com/green-tavern',
      about:
        'A charming pub with a beautiful outdoor seating area, perfect for relaxing.',
      foodMenu: [
        'https://images.pexels.com/photos/313700/pexels-photo-313700.jpeg',
        'https://images.pexels.com/photos/128424/pexels-photo-128424.jpeg',
        'https://images.pexels.com/photos/831012/pexels-photo-831012.jpeg',
      ],
      barMenu: [
        'https://images.pexels.com/photos/612790/pexels-photo-612790.jpeg',
        'https://images.pexels.com/photos/2351274/pexels-photo-2351274.jpeg',
        'https://images.pexels.com/photos/143640/pexels-photo-143640.jpeg',
      ],
      openTime: '10:00 AM',
      closeTime: '10:00 PM',
      active: true,
      type: 'SUPER_PREMIUM',
      timeSlots: [
        'TIME_6_00_PM',
        'TIME_6_30_PM',
        'TIME_7_00_PM',
        'TIME_7_30_PM',
        'TIME_8_00_PM',
        'TIME_8_30_PM',
        'TIME_9_00_PM',
        'TIME_9_30_PM',
        'TIME_10_00_PM',
        'TIME_10_30_PM',
        'TIME_11_00_PM',
      ],
      featureIds: [
        '61e9ef7f4c46f34e2f02e960',
        '61e9ef7f4c46f34e2f02e961',
        '61e9ef7f4c46f34e2f02e962',
        '61e9ef7f4c46f34e2f02e963',
      ],
    },
  });
  await tx.pub.create({
    data: {
      id: '61e9ef7f4c46f34e2f02e95e',
      name: 'The Blue Anchor',
      address: '321 Pine Street',
      phone: '+1555555555',
      profileImage:
        'https://images.pexels.com/photos/20082034/pexels-photo-20082034.jpeg',
      tags: 'pub, beachfront, seafood',
      mapsLink: 'https://maps.example.com/blue-anchor',
      about: 'A seaside pub offering fresh seafood and stunning ocean views.',
      foodMenu: [
        'https://images.pexels.com/photos/313700/pexels-photo-313700.jpeg',
        'https://images.pexels.com/photos/128424/pexels-photo-128424.jpeg',
        'https://images.pexels.com/photos/831012/pexels-photo-831012.jpeg',
      ],
      barMenu: [
        'https://images.pexels.com/photos/612790/pexels-photo-612790.jpeg',
        'https://images.pexels.com/photos/2351274/pexels-photo-2351274.jpeg',
        'https://images.pexels.com/photos/143640/pexels-photo-143640.jpeg',
      ],
      openTime: '11:30 AM',
      closeTime: '10:00 PM',
      active: true,
      type: 'SUPER_PREMIUM',
      timeSlots: [
        'TIME_6_00_PM',
        'TIME_6_30_PM',
        'TIME_7_00_PM',
        'TIME_7_30_PM',
        'TIME_8_00_PM',
        'TIME_8_30_PM',
        'TIME_9_00_PM',
        'TIME_9_30_PM',
        'TIME_10_00_PM',
        'TIME_10_30_PM',
        'TIME_11_00_PM',
      ],
      featureIds: [
        '61e9ef7f4c46f34e2f02e960',
        '61e9ef7f4c46f34e2f02e961',
        '61e9ef7f4c46f34e2f02e962',
        '61e9ef7f4c46f34e2f02e963',
      ],
    },
  });
  await tx.pub.create({
    data: {
      id: '61e9ef7f4c46f34e2f02e95f',
      name: 'The Rusty Anchor',
      address: '567 Beach Boulevard',
      phone: '+1666666666',
      tags: 'pub, waterfront, cocktails',
      mapsLink: 'https://maps.example.com/rusty-anchor',
      profileImage:
        'https://images.pexels.com/photos/20082035/pexels-photo-20082035.jpeg',
      about:
        'A waterfront pub offering craft cocktails and breathtaking sunset views.',
      foodMenu: [
        'https://images.pexels.com/photos/313700/pexels-photo-313700.jpeg',
        'https://images.pexels.com/photos/128424/pexels-photo-128424.jpeg',
        'https://images.pexels.com/photos/831012/pexels-photo-831012.jpeg',
      ],
      barMenu: [
        'https://images.pexels.com/photos/612790/pexels-photo-612790.jpeg',
        'https://images.pexels.com/photos/2351274/pexels-photo-2351274.jpeg',
        'https://images.pexels.com/photos/143640/pexels-photo-143640.jpeg',
      ],
      openTime: '3:00 PM',
      closeTime: '12:00 AM',
      active: true,
      type: 'SUPER_PREMIUM',
      timeSlots: [
        'TIME_6_00_PM',
        'TIME_6_30_PM',
        'TIME_7_00_PM',
        'TIME_7_30_PM',
        'TIME_8_00_PM',
        'TIME_8_30_PM',
        'TIME_9_00_PM',
        'TIME_9_30_PM',
        'TIME_10_00_PM',
        'TIME_10_30_PM',
        'TIME_11_00_PM',
      ],
      featureIds: [
        '61e9ef7f4c46f34e2f02e960',
        '61e9ef7f4c46f34e2f02e961',
        '61e9ef7f4c46f34e2f02e962',
        '61e9ef7f4c46f34e2f02e963',
      ],
    },
  });
}

async function addFeatures(tx: PrismTxn) {
  await tx.feature.createMany({
    data: [
      {
        id: '61e9ef7f4c46f34e2f02e960',
        icon: 'feature_icon_1.png',
        name: 'Valet Parking',
      },
      {
        id: '61e9ef7f4c46f34e2f02e961',
        icon: 'feature_icon_2.png',
        name: 'Wifi',
      },
      {
        id: '61e9ef7f4c46f34e2f02e962',
        icon: 'feature_icon_3.png',
        name: 'Smoke Friendly',
      },
      {
        id: '61e9ef7f4c46f34e2f02e963',
        icon: 'feature_icon_4.png',
        name: 'Veg Available',
      },
    ],
  });
}

main()
  .then(async () => {
    console.log('Seeding Complete');
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
