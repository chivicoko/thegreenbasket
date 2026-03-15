import { NextRequest, NextResponse } from 'next/server';
// import { revalidatePath } from 'next/cache';
import User from '@/models/UserModel';


export const GET = async () => {
    try {
        const users = await User.find();
        // console.log(users);
        return NextResponse.json(users);
        
    } catch (error) {
        console.log(error);
        throw new Error("Failed to fetch users");
    }
}


export const POST = async (req: NextRequest) => {
    try {
        const data = await req.json();
      
        const user = new User({
          ...data,
          // digestuser: data.digestuser || false,
          // dailyDigest: data.dailyDigest || 'Daily',
          // userStatus: data.userStatus === 'active' ? 'active' : 'inactive',
        });
      
        try {
          await user.save();
          return NextResponse.json(user);
        } catch (error) {
            console.error("Error saving user:", error);
          return NextResponse.json({ error }, { status: 400 });
        }
        
    } catch (error) {
        console.log(error);
        throw new Error("Failed to post user");
    }
}