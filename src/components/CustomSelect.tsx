import { SelectT } from "@/types";
import { Select, MenuItem, FormControl, InputLabel } from "@mui/material";

export default function CustomSelect({ info }: {info:SelectT}){
    const {name,options,colors,value,theme,filter} = info
    return(
        <div>
            <FormControl variant="filled" sx={{ m: 1, width: 120 }} className={`${value === options[1].value ? colors[0] : value === options[2].value ? colors[1]:theme}`}>
                    <InputLabel
                        id={`select-label-${name}`}
                        sx={{
                            zIndex: 0,
                        }}
                    >
                        {name}
                    </InputLabel>
                    <Select
                        labelId={`select-label-${name}`}
                        id={`select-label-${name}-filled`}
                        label={name}
                        value={value}
                        onChange={(e) => {
                            filter(e.target.value);
                        }}>
                        {options.map((e)=>(
                            <MenuItem value={e.value} key={`options${name}-${e.value}`}>{e.name}</MenuItem>
                        ))}
                    </Select>
                </FormControl>
        </div>
    )
}