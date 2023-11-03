'use client'
import CustomSelect from "./CustomSelect";
import { useDispatch } from "react-redux"
import { AppDispatch } from "@/redux/store";
import { useAppSelector } from "@/redux/store";
import { change } from "@/redux/features/filters";

export default function FilterArea() {
    const dispatch = useDispatch<AppDispatch>();
    const filter = useAppSelector((state) => state.changeFilter);
    const theme = useAppSelector((state) => state.changeTheme.value);

    const handleFilterNameChange = (e: string) => {
        dispatch(change({ name: e }));
    }
    
    const handleFilterAlignmentChange = (e: string) => {
        console.log(e)
        dispatch(change({ alignment: e }));
    }

    const handleFilterGenderChange = (e: string) => {
        dispatch(change({ gender: e }));
    }

    return (
        <div>
            <div className="flex justify-around flex-wrap items-center p-2 w-full">
                <input placeholder="Find Hero" className={`h-10 text-center ${theme.input}`} onChange={(e) => {
                    handleFilterNameChange(e.target.value);
                }}></input>
               <CustomSelect info={{name:'alignment',value:filter.alignment,filter:handleFilterAlignmentChange,colors:['bg-green-200','bg-red-200'],
               options:[{name:'All',value:''},{name:'Good',value:'good'},{name:'Bad',value:'bad'}],theme:theme.input}}/>
               <CustomSelect info={{name:'gender',value:filter.gender,filter:handleFilterGenderChange,colors:['bg-blue-200','bg-pink-200'],
               options:[{name:'All',value:''},{name:'Male',value:'Male'},{name:'Female',value:'Female'}],theme:theme.input}}/>
            </div>
        </div>
    )
}
