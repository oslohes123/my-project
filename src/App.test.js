import { render,screen } from "@testing-library/react"
import BookingForm from "./components/BookingForm"

describe("Test for labels",() => {
    test("Header is there", () => {
        render(<BookingForm/>)
        const headingElement = screen.getByText("Booking page");
        expect(headingElement).toBeInTheDocument();
    })
    test("Date label", () => {
        render(<BookingForm/>)
        const dateElement = screen.getByText("Choose date");
        expect(dateElement).toBeInTheDocument();
    })
    test("Time choice label is present", () => {
        render(<BookingForm/>)
        const TimeElement = screen.getByText("Choose time");
        expect(TimeElement).toBeInTheDocument();
    })
    test("Number of guests", () => {
        render(<BookingForm/>)
        const GuestsElement = screen.getByText("Number of guests");
        expect(GuestsElement).toBeInTheDocument();
    })
    test("Occasion label", () => {
        render(<BookingForm/>)
        const OccassionElement = screen.getByText("Occasion");
        expect(OccassionElement).toBeInTheDocument();
    })
})