'use client'
import { Select,MenuItem, InputLabel,FormControl } from "@mui/material";
import { useDispatch } from "react-redux"
import { AppDispatch } from "@/redux/store";
import { useAppSelector } from "@/redux/store";
import { change } from "@/redux/features/filters";

export default function FilterArea(){
    const dispatch = useDispatch<AppDispatch>();
    const filter = useAppSelector((state)=> state.changeFilter)
    const handleFilterNameChange = (e:string)=>{
        dispatch(change({name:e}))

    }
    const handleFilterAlignmentChange = (e:string)=>{
        dispatch(change({alignment:e}))
    }
    return(
        <div>
        <div className="flex justify-around items-center h-20 w-full ">
            <input placeholder="find Heroe" className="h-10  text-center" onChange={((e)=>{
                handleFilterNameChange(e.target.value)
            })}></input>
            <FormControl variant="filled" sx={{m:1,width:120}} className={`${filter.alignment === 'good'? 'bg-green-200':''}
            ${filter.alignment === 'bad'? 'bg-red-200':''}`}>
            <InputLabel id="select-label" >Alignment</InputLabel>
                <Select
                labelId="select-label"  
                id ="select-label-filled"
                label="Heroes"
                value={filter.alignment}
                onChange={((e)=>{
                    handleFilterAlignmentChange(e.target.value)
                })}>
                <MenuItem value={''}>All</MenuItem>
                <MenuItem value={'good'}>Good</MenuItem>
                <MenuItem value={'bad'}>Bad</MenuItem>
                </Select>
            </FormControl>
        </div>
        </div>
    )
}