import React, { useState } from "react";
import { HOURS } from "./Constants";
import * as material from "@material-ui/core";
import MotorcycleIcon from "@material-ui/icons/Motorcycle";

export default function TimeTable() {
  const [color, setColor] = useState("");
  const [motorcycle, setMotorcycle] = useState(8);
  let handlerEvent = (e) => {
    if (motorcycle === 0) {
      alert("No quedan motos");
    } else {
      setColor("green");
      setMotorcycle(motorcycle - 1);
    }
  };

  return (
    <material.TableContainer>
      <material.Table style={{ height: "800", width: "100%" }}>
        <material.TableHead>
          <material.TableRow>
            <material.TableCell align="center">Hora</material.TableCell>
            <material.TableCell align="center">
              {" "}
              <MotorcycleIcon />
            </material.TableCell>
            <material.TableCell align="center">Disponible</material.TableCell>
          </material.TableRow>
        </material.TableHead>
        <material.TableBody>
          {HOURS.map((item) => {
            return (
              <material.TableRow
                key={item.id}
                onClick={(e) => handlerEvent(e.target)}
              >
                <material.TableCell align="center">
                  {item.time}
                </material.TableCell>
                <material.TableCell align="center">
                  {motorcycle}
                </material.TableCell>
                <material.TableCell align="center">Si</material.TableCell>
              </material.TableRow>
            );
          })}
        </material.TableBody>
      </material.Table>
    </material.TableContainer>
  );
}
