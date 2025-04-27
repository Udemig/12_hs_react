import Link from "next/link";
import BanButton from "../button/ban-button";
import TableWrapper from "./table-wrapper";
import { getUsers } from "@/utils/service";
import { FaEye } from "react-icons/fa";

const UserTable = async () => {
  const users = await getUsers();

  return (
    <TableWrapper>
      <thead>
        <tr className="border-b border-zinc-300 shadow">
          <th className="py-4">No</th>
          <th className="py-4">İsim</th>
          <th>Eposta</th>
          <th>Ülke</th>
          <th>Şehir</th>
          <th>Sipariş Sayısı</th>
          <th>Eylem</th>
        </tr>
      </thead>

      <tbody>
        {users.map((user, key) => (
          <tr key={key} className="border-b border-zinc-300">
            <td className="py-8">{key + 1}</td>
            <td>{user.name}</td>
            <td>{user.email}</td>
            <td>{user.address.country}</td>
            <td>{user.address.city}</td>
            <td>{user.orders.length}</td>
            <td>
              <div className="flex gap-3">
                <Link
                  href={`?show=${user.id}`}
                  className="button hover:bg-gray-200"
                >
                  <FaEye />
                </Link>
                <BanButton id={user.id} />
              </div>
            </td>
          </tr>
        ))}
      </tbody>
    </TableWrapper>
  );
};

export default UserTable;
