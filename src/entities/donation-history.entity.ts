import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Donation } from './donation.entity';
import { User } from './user.entity';

@Entity()
export class DonationHistory {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column({ name: 'transaction', type: 'varchar', nullable: false })
  transaction: string;

  @Column({
    name: 'transaction_date',
    type: 'timestamp',
    nullable: false,
  })
  transactionDate: Date;

  @ManyToOne(() => User, (user) => user)
  @JoinColumn({ name: 'user_id', referencedColumnName: 'id' })
  user: User;

  @ManyToOne(() => Donation, (donation) => donation.donations)
  @JoinColumn({ name: 'donation_id', referencedColumnName: 'id' })
  donation: Donation;
}