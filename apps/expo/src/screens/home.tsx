import { StatusBar } from "expo-status-bar";
import React from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { TRPCProvider } from "../utils/trpc";
import {
  Button,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Pressable,
} from "react-native";
import { SignInSignUpScreen } from "../screens/signin";
import { ClerkProvider, SignedIn, SignedOut } from "@clerk/clerk-expo";
import { tokenCache } from "../utils/cache";
import Constants from "expo-constants";
import { SafeAreaView } from "react-native";
import { trpc } from "../utils/trpc";

export const HomeScreen: React.FC = () => {
  const test = trpc.trip.test.useQuery();

  const test2 = trpc.trip.todayEarned.useQuery();
  return (
    <SafeAreaView>
      <View className="flex h-24 w-full flex-row items-center justify-center bg-blue-200 pt-20">
        <View className="flex h-24 w-1/2 items-center justify-start bg-red-200">
          <View className="flex items-center">
            <Text>Todays Earnings</Text>
            <Text>${test2.data}</Text>
          </View>
        </View>
        <View className="flex h-24 w-1/2 items-center justify-start bg-red-200">
          <View className="flex items-center">
            <Text>Total Earnings</Text>
            <Text>${test.data}</Text>
          </View>
        </View>
      </View>
      <View className="flex h-full w-full flex-row items-center justify-center rounded-lg border-2 bg-emerald-800 pt-60">
        {/* <Text className="text-md mt-2 font-bold text-gray-400">
          Open up App.js to start working on your app!
        </Text> */}
        <View className=" bg-red-200 ">
          <Pressable
            className="bg-red-200"
            onPress={() => console.log("Pressed!")}
          >
            <Text className="text-md mt-2 font-bold text-gray-400">asdasd</Text>
          </Pressable>
        </View>
      </View>
    </SafeAreaView>
  );
};

// import React from "react";

// import { Button, Text, TextInput, TouchableOpacity, View } from "react-native";
// import { useAuth } from "@clerk/clerk-expo";
// import { SafeAreaView } from "react-native-safe-area-context";
// import { FlashList } from "@shopify/flash-list";
// import type { inferProcedureOutput } from "@trpc/server";
// import type { AppRouter } from "@acme/api";

// import { trpc } from "../utils/trpc";

// eport const HomeScreen = () => {
// const postQuery = trpc.post.all.useQuery();
//   const [showPost, setShowPost] = React.useState<string | null>(null);

//   return (
//     <SafeAreaView className="bg-[#2e026d] bg-gradient-to-b from-[#2e026d] to-[#15162c]">
//       <View className="h-full w-full p-4">
//         <Text className="mx-auto pb-2 text-5xl font-bold text-white">
//           Create <Text className="text-[#cc66ff]">T3</Text> Turbo
//         </Text>

//         <View className="py-2">
//           {showPost ? (
//             <Text className="text-white">
//               <Text className="font-semibold">Selected post:</Text>
//               {showPost}
//             </Text>
//           ) : (
//             <Text className="font-semibold italic text-white">
//               Press on a post
//             </Text>
//           )}
//         </View>

//         <FlashList
//           data={postQuery.data}
//           estimatedItemSize={20}
//           ItemSeparatorComponent={() => <View className="h-2" />}
//           renderItem={(p) => (
//             <TouchableOpacity onPress={() => setShowPost(p.item.id)}>
//               <PostCard post={p.item} />
//             </TouchableOpacity>
//           )}
//         />

//         <CreatePost />
//         <SignOut />
//       </View>
//     </SafeAreaView>
//   );
// };
// const SignOut = () => {
//   const { signOut } = useAuth();
//   return (
//     <View className="rounded-lg border-2 border-gray-500 p-4">
//       <Button
//         title="Sign Out"
//         onPress={() => {
//           signOut();
//         }}
//       />
//       <Text className="text-md mt-2 font-bold text-gray-400">
//         Open up App.js to start working on your app!
//       </Text>
//     </View>
//   );
// };

// const PostCard: React.FC<{
//   post: inferProcedureOutput<AppRouter["post"]["all"]>[number];
// }> = ({ post }) => {
//   return (
//     <View className="rounded-lg border-2 border-gray-500 p-4">
//       <Text className="text-xl font-semibold text-[#cc66ff]">{post.title}</Text>
//       <Text className="text-white">{post.content}</Text>
//     </View>
//   );
// };

// const CreatePost: React.FC = () => {
//   const utils = trpc.useContext();
//   const { mutate } = trpc.post.create.useMutation({
//     async onSuccess() {
//       await utils.post.all.invalidate();
//     },
//   });

//   const [title, onChangeTitle] = React.useState("");
//   const [content, onChangeContent] = React.useState("");

//   return (
//     <View className="flex flex-col border-t-2 border-gray-500 p-4">
//       <TextInput
//         className="mb-2 rounded border-2 border-gray-500 p-2 text-white"
//         onChangeText={onChangeTitle}
//         placeholder="Title"
//       />
//       <TextInput
//         className="mb-2 rounded border-2 border-gray-500 p-2 text-white"
//         onChangeText={onChangeContent}
//         placeholder="Content"
//       />
//       <TouchableOpacity
//         className="rounded bg-[#cc66ff] p-2"
//         onPress={() => {
//           mutate({
//             title,
//             content,
//           });
//         }}
//       >
//         <Text className="font-semibold text-white">Publish post</Text>
//       </TouchableOpacity>
//     </View>
//   );
// };
