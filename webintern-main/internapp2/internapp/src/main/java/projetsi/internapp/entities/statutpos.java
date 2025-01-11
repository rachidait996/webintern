package projetsi.internapp.entities;


public enum statutpos {
    ENCOURS(1),
    ACCEPTE(2),
    REFUSE(3);

    private final int value;

    statutpos(int value) {
        this.value = value;
    }

    public int getValue() {
        return value;
    }

    public static statutpos fromValue(int value) {
        for (statutpos status : values()) {
            if (status.getValue() == value) {
                return status;
            }
        }
        throw new IllegalArgumentException("Invalid statut value: " + value);
    }
}
