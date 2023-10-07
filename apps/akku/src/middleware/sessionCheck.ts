// import { CustomError } from '../utils/errorThrow';
// import { responseError } from 'apps/akku/src/utils/responseError';
// import { Response, Request, NextFunction } from 'express';
// import { PrismaClient } from '@prisma/client';
// import { v4 as uuidv4 } from 'uuid';
// import { Authenticate } from '../interfaces/reqInterface';

// const prisma = new PrismaClient();

// export async function sessionCheck(
//   req: Authenticate,
//   res: Response,
//   next: NextFunction
// ) {
//   // Start a Prisma transaction
//   // console.log(req)
//   try {
//     await prisma.$transaction(async (tx) => {
//       console.log(req.userId)
//       const sessionFind = await prisma.session.findFirst({
//         where: {
//           userId: req.userId,
//         },
//       });
//       if (sessionFind) {
//         req.sessionId = sessionFind.session_Id;
//         next();
//       } else {
//         if (req.method == 'POST') {
//           console.log(req.userId);
//           const sessionCreate = await prisma.session.create({
//             data: {
//               session_Id: uuidv4(),
//               user: { connect: { id: req.userId } },
//             },
//           });
//           console.log();
//           req.sessionId = sessionCreate.session_Id;
//           next();
//         }
//         if(req.method == 'GET'){
//           next()
//         }
//       }
//     });
//   } catch (error) {
//     console.log(error);
//     return responseError(res, error);
//   } finally {
//     await prisma.$disconnect();
//   }
// }
