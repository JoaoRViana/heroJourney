/* eslint-disable @next/next/no-img-element */
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/redux/store";
import { useAppSelector } from "@/redux/store";
import { change } from '@/redux/features/changeTheme';
import Button from '@mui/material/Button';
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';

export default function Header() {
  const dispatch = useDispatch<AppDispatch>();
  const theme = useAppSelector((state) => state.changeTheme.value);

  return (
    <div className="p-2">
      <Button
        onClick={() => {
            dispatch(change())
            console.log(theme)
        }}
      >
        {theme.name === 'lightMode' ? <LightModeIcon /> : <DarkModeIcon />}
      </Button>
    </div>
  );
}
