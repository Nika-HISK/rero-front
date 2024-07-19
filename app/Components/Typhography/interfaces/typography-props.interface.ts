import { ColorsEnum } from "@/app/Enums/colors.enum"
import { TyphographyEnum } from "@/app/Enums/Typhography.enum"
import { ReactNode } from "react"

export interface Props  {
    children: ReactNode
    type: TyphographyEnum
    color?: ColorsEnum

}