import React, { useEffect, useState } from "react";
import {
  useBrush,
  useMarker,
  useAirbrush,
  Artboard,
  ArtboardRef,
  useShadingBrush,
  useEraser,
  useWatercolor,
  ToolHandlers,
} from "react-artboard";

import {
  FaPencilAlt,
  FaPaintBrush,
  FaMarker,
  FaEraser,
  FaSprayCan,
  FaDownload,
  FaTrash,
  FaUndo,
  FaRedo,
  FaGithub,
} from "react-icons/fa";
import { HexColorPicker } from "react-colorful";
import { IoMdWater } from "react-icons/io";
import { useHistory } from "react-artboard";

import { Modal } from "react-responsive-modal";
import type { IconType } from "react-icons/lib";
import { Button } from "reactstrap";
import { ColorPicker, Input } from "antd";
import { SuccessModal } from "../../../components";
import { playSound } from "../../../hooks";
import { correctsound } from "../../../assets/sounds";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSave } from "@fortawesome/free-solid-svg-icons";
const PaintComponent = (props) => {
  const { redirect } = props;
  const [color, setColor] = useState("#531B93");
  const [strokeWidth, setStrokeWidth] = useState(40);
  const [colorOpen, setColorOpen] = useState(false);
  const [sizeOpen, setSizeOpen] = useState(false);
  const [success, setSuccess] = useState(false);

  const [artboardRef, setArtboardRef] = useState<ArtboardRef | null>();
  const brush = useBrush({ color, strokeWidth });
  const marker = useMarker({ color, strokeWidth });
  const watercolor = useWatercolor({ color, strokeWidth });
  const airbrush = useAirbrush({ color, strokeWidth });
  const eraser = useEraser({ strokeWidth });
  const shading = useShadingBrush({
    color,
    spreadFactor: (1 / 45) * strokeWidth,
    distanceThreshold: 100,
  });
  const tools: Array<[ToolHandlers, IconType]> = [
    [shading, FaPencilAlt],
    [watercolor, IoMdWater],
    [brush, FaPaintBrush],
    [marker, FaMarker],
    [airbrush, FaSprayCan],
    [eraser, FaEraser],
  ];
  const [currentTool, setCurrentTool] = useState(0);

  const { undo, redo, history, canUndo, canRedo } = useHistory();
  useEffect(() => {
    if (success) {
      setTimeout(() => {
        playSound(correctsound);
      }, 1000);
    }
  }, [success]);
  return !success ? (
    <main className="" style={{ marginTop: "5%" }}>
      <div id="controls" className="toolbarSection  ">
        <Button color="light" onClick={undo} disabled={!canUndo}>
          <FaUndo size={15} title="Undo" />
        </Button>
        <Button color="light" onClick={redo} disabled={!canRedo}>
          <FaRedo title="Redo" size={15} />
        </Button>
        <Button color="light" onClick={() => artboardRef?.download()}>
          <FaDownload title="Download" size={15} />
        </Button>
        <Button color="light" onClick={() => artboardRef?.clear()}>
          <FaTrash title="Clear" size={15} />
        </Button>

        {tools.map(([tool, Icon], index) => (
          <Button
            aria-label={tool.name}
            key={tool.name}
            title={tool.name}
            color="light"
            style={{
              backgroundColor: currentTool === index ? "#aaaaff" : "#eeeeee",
            }}
            onClick={() => setCurrentTool(index)}
          >
            {<Icon color="black" size={15} title={tool.name} />}
          </Button>
        ))}
        <ColorPicker
          style={{ position: "relative", top: 8 }}
          defaultValue={color}
          onChange={(e) => setColor(e.toHexString())}
        />

        <Input
          type="number"
          min={5}
          max={100}
          style={{ width: "5%" }}
          value={strokeWidth}
          onChange={(e) => {
            setStrokeWidth(e.target.valueAsNumber);
          }}
        />
      </div>
      <div id="artboard">
        <Artboard
          tool={tools[currentTool][0]}
          ref={setArtboardRef}
          history={history}
          style={{ border: "2px gray solid", width: "100%", height: "400px" }}
        />
      </div>
      <div className="d-flex justify-content-center">
        <Button
          color="success"
          className="fa-3x"
          style={{ width: "10%" }}
          onClick={() => setSuccess(true)}
        >
          <FontAwesomeIcon icon={faSave} />
        </Button>
      </div>
    </main>
  ) : (
    <SuccessModal redirect={redirect} />
  );
};
export default PaintComponent;
