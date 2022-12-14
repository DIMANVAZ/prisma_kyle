import {PrismaClient} from '@prisma/client';

const prisma = new PrismaClient();

async function creating(){
    const creationResult = await prisma.user.create({
        data: {
            name: 'Hanaf',
            isAdmin: true,
            email: "hanaf@eu.com",
            userPreference: {
                create:{
                    emailUpdates: true
                },
            },
        },
        select:{
            name: true,
            userPreference: true
        },
    });
    console.log('created:',creationResult);
}

async function reading(){
    const foundFirst = await prisma.user.findFirst({where: {
        isAdmin: true
    }});
    console.log('foundFirst:',foundFirst);
}

async function updating(){
    const updated = await prisma.user.updateMany({
        where: {
            isAdmin: false,
        },
        data: {
            name: "Кто-то неважный"
        },
    });
    console.log('updated:',updated);
}

// creating()
//     .catch(e => console.log(e))
//     .finally(async() => {
//         await prisma.$disconnect();
//         console.log('disconnected');
//     })

// reading()
//     .catch(e => console.log(e))
//     .finally(async() => {
//         await prisma.$disconnect();
//         console.log('disconnected');
//     })

updating()
    .catch(e => console.log(e))
    .finally(async() => {
        await prisma.$disconnect();
        console.log('disconnected');
    })