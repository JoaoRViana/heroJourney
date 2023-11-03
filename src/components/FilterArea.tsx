'use client'
import { Select, MenuItem, FormControl, InputLabel } from "@mui/material";
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

                <FormControl variant="filled" sx={{ m: 1, width: 120 }} className={`${filter.alignment === 'good' ? 'bg-green-200' : filter.alignment === 'bad' ? 'bg-red-200':theme.input}`}>
                    <InputLabel
                        id="select-label-alignment"
                        sx={{
                            zIndex: 0,
                        }}
                    >
                        Alignment
                    </InputLabel>
                    <Select
                        labelId="select-label-alignment"
                        id="select-label-alignment-filled"
                        label="Alignment"
                        value={filter.alignment}
                        onChange={(e) => {
                            handleFilterAlignmentChange(e.target.value);
                        }}>
                        <MenuItem value={''}>All</MenuItem>
                        <MenuItem value={'good'}>Good</MenuItem>
                        <MenuItem value={'bad'}>Bad</MenuItem>
                    </Select>
                </FormControl>
                <FormControl variant="filled" sx={{ m: 1, width: 120 }} className={`${theme.input}`}>
                    <InputLabel
                        id="select-label-gender"
                        sx={{
                            zIndex: 0,
                        }}
                    >
                        Gender
                    </InputLabel>
                    <Select
                        labelId="select-label-gender"
                        id="select-label-gender-filled"
                        label="Gender"
                        value={filter.gender}
                        onChange={(e) => {
                            handleFilterGenderChange(e.target.value);
                        }}>
                        <MenuItem value={''}>All</MenuItem>
                        <MenuItem value={'Male'}>Male</MenuItem>
                        <MenuItem value={'Female'}>Female</MenuItem>
                    </Select>
                </FormControl>
            </div>
        </div>
    )
}
