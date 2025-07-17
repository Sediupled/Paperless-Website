// public static class UserService
// {
//     static int nextId = 1;
//
//     static UserService() { }
//
//     public IQueryable<UserDto> GetUsers(){
//     var users = from u in db
//     }
//
//     public static User? Get(int Id) => Users.FirstOrDefault(p => p.Id == Id);
//
//     public static void Add(User user)
//     {
//       // if (user.Id == 0)
//       // {
//       //     user.Id = nextId++;
//       //     Users.Add(user);
//       // }
//     }
//
//     public static void Delete(int Id)
//     {
//       // var user = Get(Id);
//       // if (user is null)
//       //     return;
//       //
//       // Users.Remove(user);
//     }
//
//     public static void Update(User user)
//     {
//     //   var index = Users.FindIndex(p => p.Id == user.Id);
//     //   if (index == -1)
//     // return;
//     //
//     //    Users[index] = user;
//      }
// }
