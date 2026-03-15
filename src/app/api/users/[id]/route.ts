

import { NextRequest, NextResponse } from 'next/server';
import User from '@/models/UserModel';

// GET user by ID
export const GET = async (req: NextRequest, { params }: { params: { id: string } }) => {
    try {
        const user = await User.findById(params.id);
        // console.log(user);
        if (!user) {
          return NextResponse.json({ error: 'User not found' }, { status: 404 });
        }
      
        return NextResponse.json(user);
        
    } catch (error) {
        console.log(error);
        throw new Error("Failed to fetch user");
    }
}

// PUT (update) user by ID
export const PUT = async (req: NextRequest, { params }: { params: { id: string } }) => {
    try {
        const updatedData = await req.json();
      
        const user = await User.findByIdAndUpdate(params.id, updatedData, { new: true });
      
        if (!user) {
          return NextResponse.json({ error: 'User not found' }, { status: 404 });
        }
      
        return NextResponse.json(user);
        
    } catch (error) {
        console.log(error);
        throw new Error("Failed to update user");
    }
}

// DELETE user by ID
export const DELETE = async (req: NextRequest, { params }: { params: { id: string } }) => {
    try {
        const result = await User.findByIdAndDelete(params.id);
      
        if (!result) {
          return NextResponse.json({ error: 'User not found' }, { status: 404 });
        }
      
        return NextResponse.json({ message: 'User deleted' });
        
    } catch (error) {
        console.log(error);
        throw new Error("Failed to delete User");
    }
}
