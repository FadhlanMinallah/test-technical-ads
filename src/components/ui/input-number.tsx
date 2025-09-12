import React from "react"
import { Input } from "@/components/ui/input"

type InputNumberProps = React.InputHTMLAttributes<HTMLInputElement> & {
  hideSpinner?: boolean
}

export function InputNumber({ hideSpinner = true, onWheel, ...props }: InputNumberProps) {
  const handleWheel: React.WheelEventHandler<HTMLInputElement> = (e) => {
    if (onWheel) onWheel(e)

    if (document.activeElement === e.currentTarget) {
      e.preventDefault()
    }
  }

  return (
    <>
      <style>{`
        /* Remove spinner - WebKit (Chrome, Safari, Edge) */
        input[type=number]::-webkit-outer-spin-button,
        input[type=number]::-webkit-inner-spin-button {
          -webkit-appearance: none;
          margin: 0;
        }
        /* Remove spinner - Firefox */
        input[type=number] {
          -moz-appearance: textfield;
        }
      `}</style>

      <Input
        {...props}
        type="number"
        onWheel={handleWheel}
        // optional: make it explicit number step with arrows removed
        // step={props.step ?? 1}
      />
    </>
  )
}
