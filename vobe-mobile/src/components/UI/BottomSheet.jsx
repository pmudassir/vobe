import React, { useEffect, useRef } from "react";
import RBSheet from "react-native-raw-bottom-sheet";
import { Typography } from "./Typography";

export function BottomSheet({
    title,
    body,
    open,
    setOpen,
    action,
    setUserInfo,
    initialUserState,
    height
}) {
    const refRBSheet = useRef();
    useEffect(() => {
        if (open) {
            refRBSheet.current.open();
        } else {
            refRBSheet.current.close();
        }
    }, [open]);

    return (
        <RBSheet
            ref={refRBSheet}
            closeOnDragDown={true}
            closeOnPressMask={true}
            height={height ? height : 600}
            onClose={() => {
                if (setUserInfo) {
                    setUserInfo(initialUserState);
                }
                setOpen(false);
            }}
            customStyles={{
                wrapper: {
                    backgroundColor: "rgba(35, 35, 35, 0.4)"
                },
                container: {
                    backgroundColor: "#FAF8EF",
                    borderRadius: 24,
                    padding: 20
                },
                draggableIcon: {
                    backgroundColor: "#000"
                }
            }}
        >
            <Typography
                variant="heading-medium"
                color="text-brand-80"
                className="mx-5 mb-6"
            >
                {title}
            </Typography>
            {body}
            {action}
        </RBSheet>
    );
}
