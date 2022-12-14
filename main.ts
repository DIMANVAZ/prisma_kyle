import {PrismaClient} from '@prisma/client';
const prisma = new PrismaClient();

async function main(){
    const creationResult = await prisma.user.create({
        data: {
            name: 'Ayrat',
            isAdmin: true,
            email: "ay@mail.ru"
        }
    });
    console.log(creationResult);
}

main()
    .catch(e => console.log(e))
    .finally(async() => {
        await prisma.$disconnect();
        console.log('disconnected');
    })