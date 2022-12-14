align:
	npx prisma format
gen:
	npx prisma generate
mig:
	npx prisma migrate dev --name autoNamedMig
stu:
	npx prisma studio
go:
	npm run devStart